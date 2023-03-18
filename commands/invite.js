const Discord = require('discord.js');
const client = new Discord.Client();
const disbut = require('discord-buttons')(client);

module.exports.run = async(client,message,args)=>{



let button2 = new disbut.MessageButton()
  .setStyle('url') //default: blurple
  .setLabel('Bot Invite') //default: NO_LABEL_PROVIDED
  .setID('Inv')
  .setURL('https://dsc.gg/sutilbot')

let button = new disbut.MessageButton()
  .setStyle('url') //default: blurple
  .setLabel('Server Invite') //default: NO_LABEL_PROVIDED
  .setID('Inv')
  .setURL('https://dsc.gg/sutilbotserver')

message.channel.send('Hey, Invite me to your server!!!!\nAlso check out my server!!', {
  buttons: [
    button2, button
  ]
});

}
module.exports.help ={
    name:"invite"
}