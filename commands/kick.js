module.exports = {
    name: 'kick',
    description: 'Kick a user from the server',
    options: [
      {
        name: 'user',
        type: 'USER',
        description: 'The user to kick',
        required: true,
      },
      {
        name: 'reason',
        type: 'STRING',
        description: 'The reason for the kick',
        required: false,
      },
    ],
    async execute(message, args) {
      const user = message.mentions.users.first();
      const reason = args.slice(1).join(' ');
  
      const member = message.guild.members.cache.get(user.id);
  
      if (!member) {
        return message.reply('User not found.');
      }
  
      if (!member.kickable) {
        return message.reply('Unable to kick user.');
      }
  
      try {
        await member.kick(reason);
        message.reply(`${user.username} has been kicked.`);
      } catch (error) {
        console.error(error);
        message.reply('An error occurred while attempting to kick the user.');
      }
    },
  };