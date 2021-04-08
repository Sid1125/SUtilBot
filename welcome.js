const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = client =>{
	const channelId = '769795970266824746'
	const rulesId = '829661574104350741'
	const leaveId = '829666698767368222'
 client.on('guildMemberAdd', (member) => {
	 console.log(member);
	 
	 const welcomeEmbed = new Discord.MessageEmbed()
    .setDescription(`**WELCOME ${member} to our server.\nBe sure to check our${member.guild.channels.cache.get(rulesId).toString()}!!!!**`)
	.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B73NVrODIjdj8OOsYjvBNsxpNR-gm4egBg&usqp=CAU')
    .setColor('BLUE')
    .setTimestamp();
const channel = member.guild.channels.cache.get(channelId);
channel.send(welcomeEmbed);


 client.on('guildMemberRemove', (member) => {
	 
	 const leaveEmbed = new Discord.MessageEmbed()
    .setDescription(`**Sorry to see you go ${member}!!!! 😢😢😭😭**`)
    .setColor('BLUE')
    .setTimestamp();
const channel = member.guild.channels.cache.get(leaveId);
channel.send(leaveEmbed);


      
})
  
})

}