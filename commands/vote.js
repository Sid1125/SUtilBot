const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
 const voteEmbed = new Discord.MessageEmbed()
.setDescription(`https://top.gg/bot/756538469106581554/vote`)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
	.setColor('BLUE')
	.setTimestamp();
  try {
	  await message.channel.send(voteEmbed);
	} catch (err) {
		console.log(err);
		message.channel.send("I am not able to say that message!!");
	}
}

module.exports.help ={
    name:"vote"
}