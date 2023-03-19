const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'av',
    description: 'Displays the avatar of the specified user.',
    execute(message) {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new EmbedBuilder()
            .setTitle(`${user.username}'s avatar`)
            .setColor(0x333333)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }));

        message.channel.send({ embeds: [avatarEmbed] });
    },
}; 