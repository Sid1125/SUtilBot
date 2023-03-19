const { Client, intents, Collection, GatewayIntentBits, Partials, interactionCreate } = require('discord.js');
const { createAudioPlayer, createAudioResource, joinVoiceChannel, NoSubscriberBehavior, StreamType } = require('@discordjs/voice');
const { EmbedBuilder } = require('discord.js');
const ytdl = require('ytdl-core');
const musicQueue = new Map();
const fs =require('fs');
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


  const prefix = '!';

  client.commands = new Collection();
  const commandFiles = require('fs').readdirSync('./commands').filter(file => file.endsWith('.js'));
  
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`Loaded command ${command.name}`);
  }
  
  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    const command = client.commands.get(interaction.commandName);
  
    if (!command) return;
  
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  });
  
  client.on('messageCreate', async message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
  
    if (!command) return;
  
    try {
      await command.execute(message, args, client);
    } catch (error) {
      console.error(error);
      await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
  });
  
  async function playMusic(voiceChannel, connection, url) {
    try {
      const stream = await ytdl(url, { filter: 'audioonly' });
      const player = connection.receiver.createStream();
      player.on('error', console.error);
      const dispatcher = connection.play(player, { type: 'opus', volume: false, bitrate: 'auto' });
      dispatcher.on('error', console.error);
      dispatcher.on('finish', () => {
        console.log('Music ended');
        voiceChannel.leave();
      });
      dispatcher.setVolumeLogarithmic(1 / 5);
      return { status: true, message: 'Playing...' };
    } catch (error) {
      console.log(error);
      return { status: false, message: 'Error playing the video.' };
    }
  }
  
  client.login(DJS_TOKEN);