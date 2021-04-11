const Discord = require('discord.js');
const client = new Discord.Client();
const canvas = require('discord-canvas');
const Schema = require('../models/welcomeChannel');


module.exports = client => {
 client.on('guildMemberAdd', async(member) => {
	Schema.findOne({ Guild: member.guild.id }, async(err, data) => {
		if(!data) return;
const user = member.user;

		const image = new canvas.Welcome()
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setMemberCount(member.guild.memberCount)
    .setGuildName(member.guild.name)
    .setAvatar(user.displayAvatarURL({ format: 'png', }))
    .setColor("border", "#12DAEE")
    .setColor("username-box", "#040404")
    .setColor("discriminator-box", "#040404")
    .setColor("message-box", "#040404")
    .setColor("title", "#12DAEE")
    .setColor("avatar", "#040404")
    .setBackground(
        "https://cdn.discordapp.com/attachments/782939717816811560/830019080311668766/bg_bggenerator_com.png"
    )
    .toAttachment();

	const attachment = new Discord.MessageAttachment(
		(await image).toBuffer(),
		 "welcome-image.png"
		 );

const channel = member.guild.channels.cache.get(data.Channel);

channel.send(attachment);

});


  
})

};
