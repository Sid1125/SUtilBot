const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const discord_button = require('discord-buttons');

module.exports.run = async(client,Message,args)=>{
	
	let button = new discord_button.MessageButton()
	  .setStyle('url') //default: blurple
	  .setLabel('Vote on Top.gg') //default: NO_LABEL_PROVIDED
	  .setID('Vote')
	  .setURL('https://top.gg/bot/756538469106581554');
	
	Message.channel.send('Vote for me on Top.gg', button);
	
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'vote') {
		const row = new MessageActionRow()
			.addComponents(
				// ...
			);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Vote me on top.gg!!')
			.setURL('https://top.gg/bot/756538469106581554')
			.setDescription('Vote me !!');

		await interaction.reply({ content: 'Vote me on top.gg!', ephemeral: true, embeds: [embed], components: [row] });
	}
});	
	
}

module.exports.help ={
    name:"vote"
}