const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
  let ad = message.mentions.users.first() ;
  if(!ad) return message.reply(`User Not Specified !`)

  let avatar = ad.displayAvatarURL({ dynamic: true, format: 'png', });
  let attachment = new Discord.MessageAttachment(avatar);
    message.channel.send(attachment)
    message.channel.send("You look Cool Man!!")
}

module.exports.help ={
    name:"av"
}