const { EmbedBuilder } = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { createAudioPlayer, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');
const queue = new Map();

module.exports = {
  name: 'add',
  description: 'Adds a song to the queue',
  async execute(message, args, guild) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.channel.send('You need to be in a voice channel to play music!');
    }

    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    const query = args.join(' ');

    const searchResult = await ytSearch(query);
    const videoUrl = searchResult.videos.length > 0 ? searchResult.videos[0].url : null;

    if (!videoUrl) {
      return message.channel.send('No video results found.');
    }

    const songInfo = await ytdl.getInfo(videoUrl);
    const song = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
      requester: message.author.tag,
    };

    let serverQueue = queue.get(message.guild.id);

    if (!serverQueue) {
      const queueConstructor = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: false,
      };

      queue.set(message.guild.id, queueConstructor);
      queueConstructor.songs.push(song);

      try {
        const connection = joinVoiceChannel({
          channelId: voiceChannel.id,
          guildId: message.guild.id,
          adapterCreator: message.guild.voiceAdapterCreator,
        });
        queueConstructor.connection = connection;
        play(message.guild, queueConstructor.songs[0]);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        queue.delete(message.guild.id);
        return message.channel.send(`Could not join voice channel: ${error}`);
      }
    } else {
      serverQueue.songs.push(song);
      const embed = new EmbedBuilder()
        .setColor('#00FF00')
        .setTitle(`Added to queue: ${song.title}`)
        .setDescription(`Position in queue: ${serverQueue.songs.length}`);
      message.channel.send({ embeds: [embed] });
      
      if (!serverQueue.playing) {
        serverQueue.playing = true;
        play(message.guild, serverQueue.songs[0]);
      }
    }
  }
};

async function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const stream = ytdl(song.url, { filter: 'audioonly' });
  const resource = createAudioResource(stream);
  const player = createAudioPlayer();

  serverQueue.connection.subscribe(player);
  player.play(resource);

  player.on('finish', () => {
    serverQueue.songs.shift();
    if (serverQueue.songs.length > 0) {
      play(guild, serverQueue.songs[0]);
    } else {
      serverQueue.playing = false;
    }
  });

  player.on('error', (error) => {
    console.error(`Error: ${error}`);
  });

  const embed = new EmbedBuilder()
    .setColor('#00FF00')
    .setTitle(`Now playing: ${song.title}`)
    .setDescription(`Requested by: ${serverQueue.songs[0].requester}`);
  serverQueue.textChannel.send({ embeds: [embed] });
}
