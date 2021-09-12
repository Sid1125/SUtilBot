const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const canvacord = require("canvacord");


module.exports.run = async(client,message,args)=>{

let target = message.mentions.users.first() ;
if(!target) return message.reply(`User Not Specified !`)

let avatar = target.displayAvatarURL({ dynamic: true, format: 'png', size: 512 });
let image = await canvacord.Canvas.wanted(avatar);
let attachment = new Discord.MessageAttachment(image, "wanted.png");
return message.channel.send(attachment);

}

module.exports.help ={
    name:"wanted"
}
