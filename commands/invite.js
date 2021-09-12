const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
module.exports.run = async(client,message,args)=>{


const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

client.on('interactionCreate', async interaction => {


		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Bot Invite')
			.setURL('https://dsc.gg/sutilbot')
			.setDescription('Invite me !!');

		await interaction.reply({ content: 'Bot Invite!', ephemeral: true, embeds: [embed], components: [row] });
}}
});


}
module.exports.help ={
    name:"invite"
}