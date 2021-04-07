const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
const statsEmbed = new Discord.MessageEmbed()
    .setTitle(`Server count: ${client.guilds.cache.size}`)
    .setColor('BLUE')
    .setTimestamp();

try {
	  await message.channel.send(statsEmbed);
	} catch (err) {
		console.log(err);
		message.channel.send("I am not able to show the number of servers the bot is in!!");
	}
  
}

module.exports.help ={
    name:"stats"
}