const { Client, intents, Collection, GatewayIntentBits, Partials, interactionCreate } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ]
}); 
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { createAudioPlayer, createAudioResource, joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
  name: 'play',
  description: 'Plays a song from YouTube',
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.channel.send('You need to be in a voice channel to play music!');
    }

    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      return message.channel.send('I need the permissions to join and speak in your voice channel!');
    }

    // Join the voice channel
    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
    
    // Check if input is a link or a search query
    let videoUrl = args[0];
    if (!ytdl.validateURL(videoUrl)) {
      // If it's a search query, search for the video and get the URL of the first result
      const videoFinder = async (query) => {
        if(!query) {return message.channel.send('No query given!')}
        const videoResult = await ytSearch(query);
        return (videoResult.videos.length > 1) ? videoResult.videos[0].url : null;
      }

      const video = await videoFinder(args.join(' '));
      if (!video) {
        return message.channel.send('No video results found.');
      }

      videoUrl = video;
    }

    // Play the video
    const stream = ytdl(videoUrl, { filter: 'audioonly' });
    const player = createAudioPlayer();
    const resource = createAudioResource(stream);
    connection.subscribe(player);
    player.play(resource);
    player.on('error', (error) => {
      console.error(`Error: ${error.message}`);
      connection.destroy();
    });
    player.on('stateChange', (oldState, newState) => {
      if (newState.status === 'idle') {
        connection.destroy();
      }
    });
  }
}