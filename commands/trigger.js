const Discord = require('discord.js');
const client = new Discord.Client();
const canvacord = require("canvacord");


module.exports.run = async(client,message,args)=>{

let person = message.mentions.users.first() ;
if(!person) return message.reply(`User Not Specified !`)

let avatar = person.displayAvatarURL({ dynamic: false, format: 'png', });
let image = await canvacord.Canvas.trigger(avatar);
let attachment = new Discord.MessageAttachment(image, "triggered.gif");
return message.channel.send(attachment);

}

module.exports.help ={
    name:"trigger"
}
