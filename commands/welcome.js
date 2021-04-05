
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = async(client,message,args)=>{
client.on('guildMemberAdd', member => {
  // channel: the channel you want to send the welcome message in


  // or send it with an embed:
  let embed = new Discord.RichEmbed()
    .setTitle("Welcome")
    .setDescription(`Hi ${member}, Welcome to the server!`)
    .setImage('https://image.ibb.co/dNGVKz/Screenshot_1.png');
  channel.send({embed});
});
}
module.exports.help ={
    name:"welcome"
}
