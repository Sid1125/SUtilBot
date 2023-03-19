const { Permissions } = require('discord.js');

module.exports = {
  name: 'unban',
  description: 'Unban a user from the server',
  options: [
    {
      name: 'user',
      type: 'USER',
      description: 'The user to unban',
      required: true,
    },
    {
      name: 'reason',
      type: 'STRING',
      description: 'The reason for the unban',
      required: false,
    },
  ],
  userPermissions: ['BAN_MEMBERS'],
  botPermissions: ['BAN_MEMBERS'],
  async execute(message, args) {
    const userId = args[0];
    const reason = args.slice(1).join(' ');

    if (!message.guild.available) {
      return message.reply('The server is not available right now. Please try again later.');
    }

    const bans = await message.guild.bans.fetch();
    const user = bans.get(userId);
    if (!user) {
      return message.reply('That user is not banned from this server.');
    }

    await message.guild.members.unban(user.user, reason);

    message.reply(`Successfully unbanned ${user.user.tag} for: ${reason}`);
  },
};