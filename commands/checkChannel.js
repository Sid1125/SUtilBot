const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const Schema = require('../models/welcomeChannel');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async(client,message,args)=>{

 if(!message.member.hasPermission('ADMINISTRATOR')) return;

 Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
  if(!data) return message.reply('This server has no channel set as Welcome Channel!!');

  const channel = client.channels.cache.get(data.Channel);

  message.reply(`Welcome Channel => ${channel}`);
 })
}

module.exports.help ={
    name:"cwc"
}