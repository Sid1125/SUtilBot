const { PermissionsBitField, EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unban a user from the server')
		.addStringOption(option =>
			option.setName('user_id')
				.setDescription('The ID of the user to unban')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('reason')
				.setDescription('The reason for the unban')
				.setRequired(false)),
	userPermissions: ['BanMembers'],
	botPermissions: ['BanMembers'],
	async execute(interaction) {
		await interaction.deferReply(); // Acknowledge the interaction

		const userId = interaction.options.getString('user_id'); // Get user ID from options
		const reason = interaction.options.getString('reason') || 'No reason provided'; // Default reason if none is given

		if (!interaction.guild.available) {
			return interaction.editReply('The server is not available right now. Please try again later.'); // Edit reply instead of reply
		}

		try {
			const bans = await interaction.guild.bans.fetch(); // Fetch all bans
			const user = bans.get(userId); // Check if user is banned
			if (!user) {
				return interaction.editReply('That user is not banned from this server.'); // Edit reply
			}

			await interaction.guild.members.unban(user.user.id, reason); // Unban the user

			return interaction.editReply(`Successfully unbanned <@${user.user.id}> for: ${reason}`); // Edit reply
		} catch (error) {
			console.error(error);
			return interaction.editReply('I was unable to unban that user. Please try again later.'); // Edit reply on error
		}
	},
};
