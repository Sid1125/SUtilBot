const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
 const invEmbed = new Discord.MessageEmbed()
.setDescription['Click here to Invte me to your server!!!!'](`https://dsc.gg/sutilbot`)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
	.setColor('BLUE')
	.setTimestamp();
  try {
	  await message.channel.send(invEmbed);
	} catch (err) {
		console.log(err);
		message.channel.send("I am not able to say that message!!");
	}
}

module.exports.help ={
    name:"invite"
}