const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'stats',
  description: 'Shows information about the bot',
  execute(message) {
    const embed = new EmbedBuilder()
      .setTitle('Bot Stats')
      .addFields(
        { name: 'Server Count', value: message.client.guilds.cache.size.toString(), inline: true },
        { name: 'User Count', value: message.client.users.cache.size.toString(), inline: true },
        { name: 'Uptime', value: getUptime(), inline: true }
      )
      .setColor('#1ad0f6');
    message.channel.send({ embeds: [embed] });
  },
};

function getUptime() {
  const totalSeconds = process.uptime();
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}