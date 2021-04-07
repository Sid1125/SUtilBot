const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{
  	message.delete();
	const messageToSay = args.join(" ");
  const sayEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} said: ${messageToSay}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
	.setColor('BLUE')
	.setTimestamp();
  try {
	  await message.channel.send(sayEmbed);
	} catch (err) {
		console.log(err);
		message.channel.send("I am not able to say that message!!");
	}
      
}

module.exports.help ={
    name:"say"
}
