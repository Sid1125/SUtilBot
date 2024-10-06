const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user from the server')
    .addUserOption(option => 
      option.setName('user')
        .setDescription('The user to kick')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('The reason for the kick')
        .setRequired(false)),
        
  async execute(interaction) {
    const user = interaction.options.getUser('user'); // Get the user option from interaction
    const reason = interaction.options.getString('reason') || 'No reason provided'; // Get the reason option, default if not provided

    const member = interaction.guild.members.cache.get(user.id); // Get the member object from guild

    if (!member) {
      return interaction.reply('User not found in this server.'); // Check if member is found
    }

    if (!member.kickable) {
      return interaction.reply('I cannot kick this user. They may have a higher role than me or I lack the permissions.'); // Check if bot can kick the member
    }

    try {
      await member.kick(reason); // Attempt to kick the member
      interaction.reply(`${user.username} has been kicked for: ${reason}`); // Confirmation message
    } catch (error) {
      console.error(error);
      interaction.reply('An error occurred while attempting to kick the user. Please try again later.'); // Error handling
    }
  },
};
