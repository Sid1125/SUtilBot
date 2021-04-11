const Discord = require('discord.js');
const client = new Discord.Client();
const Schema = require('../bot');

module.exports.run = async(client,message,args)=>{
 if(!message.member.hasPermission('ADMINISTRATOR')) return;

 let channel = message.mentions.channels.first();
 if(!channel) return message.reply('Please mention a channel to set it as a Welcome channel!!');

 Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
     if(data){
        data.Channel = channel.id;
        data.save();
     } else {
        new Schema({
            Guild: message.guild.id,
            Channel: channel.id,
        }).save();
     }
     message.reply(`${channel} has been set as the new Welcome Channel`);
 })
}

module.exports.help ={
    name:"swc"
}