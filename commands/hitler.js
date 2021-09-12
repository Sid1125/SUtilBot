const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const canvacord = require("canvacord");


module.exports.run = async(client,message,args)=>{

let target = message.mentions.users.first() ;
if(!target) return message.reply(`User Not Specified !`)

let avatar = target.displayAvatarURL({ dynamic: true, format: 'png', size: 512 });
let image = await canvacord.Canvas.hitler(avatar);
let attachment = new Discord.MessageAttachment(image, "hitler.png");
return message.channel.send(attachment);

}

module.exports.help ={
    name:"hitler"
}
