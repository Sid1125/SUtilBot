const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first())
if (!User) return message.channel.send("Invalid User")

let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason}) && message.channel.send(`Banned ${User} for ${banReason}`)
}

module.exports.help ={
    name:"ban"
}