const { PermissionsBitField, EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban a user from the server')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('The user to ban')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('The reason for the ban')
				.setRequired(false)),
	userPermissions: ['BanMembers'],
	botPermissions: ['BanMembers'],
	async execute(interaction) {
		const user = interaction.options.getUser('user'); // Get the user from the options
		const reason = interaction.options.getString('reason') || 'No reason provided'; // Default reason if none is given

		if (!interaction.guild.available) {
			return interaction.reply('The server is not available right now. Please try again later.');
		}

		const member = interaction.guild.members.cache.get(user.id);
		if (!member) {
			return interaction.reply('That user is not a member of this server.');
		}

		if (!member.bannable) {
			return interaction.reply('I cannot ban that user. Do they have a higher role than me?');
		}

		try {
			await member.ban({ reason });
			return interaction.reply(`Successfully banned ${user.tag} for: ${reason}`);
		} catch (error) {
			console.error(error);
			return interaction.reply('I was unable to ban that user. Please try again later.');
		}
	},
};
