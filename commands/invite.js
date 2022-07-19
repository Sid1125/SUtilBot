const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.run = async(client,message,args)=>{


const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

client.on('interactionCreate', async interaction => {


		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Bot Invite')
			.setURL('https://dsc.gg/sutilbot')
			.setDescription('Invite me !!');

		await interaction.reply({ content: 'Bot Invite!', ephemeral: true, embeds: [embed], components: [row] });
})
};



module.exports.help ={
    name:"invite"
}