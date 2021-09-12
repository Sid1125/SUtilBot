const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const canvacord = require("canvacord");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async(client,message,args)=>{

let target = message.mentions.users.first() ;
if(!target) return message.reply(`User Not Specified !`)

let avatar = target.displayAvatarURL({ dynamic: true, format: 'png', size: 512 });
let image = await canvacord.Canvas.jail(avatar);
let attachment = new Discord.MessageAttachment(image, "jail.png");
return message.channel.send(attachment);

}

module.exports.help ={
    name:"jail"
}
