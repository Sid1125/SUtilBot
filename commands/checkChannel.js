const Discord = require('discord.js');
const client = new Discord.Client();
const Schema = require('../bot');

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