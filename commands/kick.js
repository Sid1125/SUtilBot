const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{

if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first())
if (!User) return message.channel.send("Invalid User")

let kickReason = args.join(" ").slice(22);
if (!kickReason) {
  kickReason = "None"
}

User.kick({reason: kickReason}) && message.channel.send(`Kicked ${User} for ${kickReason}`)
}

module.exports.help ={
    name:"kick"
}