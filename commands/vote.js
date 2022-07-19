const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

module.exports.run = async(client,Message,args)=>{
	

	
client.on('interactionCreate', async interaction => {
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Vote me on top.gg!!')
			.setURL('https://top.gg/bot/756538469106581554')
			.setDescription('Vote me !!');

		await interaction.reply({ content: 'Vote me on top.gg!', ephemeral: true, embeds: [embed], components: [row] });
	
});	
	
}

module.exports.help ={
    name:"vote"
}