const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] });


module.exports.run = async(client,message,args)=>{
  let ad = message.mentions.users.first() ;
  if(!ad) return message.reply({content: `User Not Specified !`})

  let avatar = ad.displayAvatarURL({ dynamic: true, format: 'png', });
  let attachment = new Discord.MessageAttachment(avatar);
    message.channel.send(attachment)
    message.channel.send({content: "You look Cool Man!!"})
}

module.exports.help ={
    name:"av"
}