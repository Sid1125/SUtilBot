const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = async(client,message,args)=>{

const b = new Discord.MessageEmbed()
		.setTitle('Invite SUtilBot !')
		.addField('Bot invite', '[Click here](https://dsc.gg/sutilbot)', true)
		.addField('Server invite', '[Click here](https://dsc.gg/sutilbotserver)', true)
		.setColor('RANDOM')
		.setFooter('Thanks for inviting the bot !');
	message.channel.send(b);
}

module.exports.help ={
    name:"invite"
}