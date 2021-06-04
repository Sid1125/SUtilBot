const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{

if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
if (!message.guild.me.hasPermission(`KICK_MEMBERS`)) return message.reply(`I am sorry, but I don't have the perms to ban a user.`);
let User = message.guild.member(message.mentions.users.first())
if (!User) return message.channel.send("Invalid User")
if (User.hasPermission(`ADMINISTRATOR`)) return message.reply(`I am sorry, but I can not kick ${User} as he/she is an Admin.`);
let kickReason = args.join(" ").slice(22);
if (!kickReason) {
  kickReason = "None"
}

User.kick({reason: kickReason}) && message.channel.send(`Kicked ${User} for ${kickReason}`)
}

module.exports.help ={
    name:"kick"
}