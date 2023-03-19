const { Permissions } = require('discord.js');

module.exports = {
  name: 'ban',
  description: 'Ban a user from the server',
  options: [
    {
      name: 'user',
      type: 'USER',
      description: 'The user to ban',
      required: true,
    },
    {
      name: 'reason',
      type: 'STRING',
      description: 'The reason for the ban',
      required: false,
    },
  ],
  userPermissions: ['BAN_MEMBERS'],
  botPermissions: ['BAN_MEMBERS'],
  async execute(message, args) {
    const user = message.mentions.users.first();
    const reason = args.slice(1).join(' ');

    if (!message.guild.available) {
      return message.reply('The server is not available right now. Please try again later.');
    }

    const member = message.guild.members.cache.get(user.id);
    if (!member) {
      return message.reply('That user is not a member of this server.');
    }

    if (!member.bannable) {
      return message.reply('I cannot ban that user. Do they have a higher role than me?');
    }

    await member.ban({ reason });

    message.reply(`Successfully banned ${user.tag} for: ${reason}`);
  },
};
