const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
const statsEmbed = new Discord.MessageEmbed()
    .setTitle(`Bot Stats`)
 .setDescription(`Server count: ${client.guilds.cache.size}\nPing: **${client.ws.ping}ms**\nRobot connected in **${client.voice.connections.size}** channels !\nUser Count: ${client.users.cache.size}`)
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
