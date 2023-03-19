// Import the necessary Discord.js classes
const { EmbedBuilder } = require('discord.js');

// Define the command
module.exports = {
  name: 'say',
  description: 'Repeats the user\'s message.',
  usage: '<message>',
  execute(message, args) {
    // Check if the user provided a message to repeat
    if (!args.length) {
      return message.reply('Please provide a message to repeat!');
    }

    // Join the message arguments into a single string
    const messageContent = args.join(' ');

    // Create an embed with the repeated message and user information
    const embed = new EmbedBuilder()
      .setColor('#1ad0f6')
      .setDescription(`${message.author} says: ${messageContent}`);

    // Send the embed
    message.channel.send({ embeds: [embed] });
  },
};