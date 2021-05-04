/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

module.exports.run = async (client, message, args, utils) => {
	const pronouns = ['silly', 'mommy', 'dad', 'mom', 'master', 'nii-san', 'onee-san', 'love', 'ma\'am', 'sir', 'friend', 'b-baka', 'honey'];
	const randompronoun = pronouns[Math.floor(Math.random() * (pronouns.length - 1 + 1) + 1)];
	const question = args.join(' ');
	if(!question) return message.channel.send(`${randompronoun}, ask a question 🥺`);
	const answer = ['nu', 'yus', 'yes', 'no', 'never', 'of course', 'hell yeah', 'hell no', 'negative', 'positive', 'not today', 'only today', 'sadly yes', 'sadly no', 'maybe', 'you bet', 'not a chance', 'it\'s a secret', 'only for today'];
	const randomanswer = answer[Math.floor(Math.random() * (answer.length - 1 + 1) + 1)];
	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle(question)
		.setDescription(`${randompronoun}, ${randomanswer}`);
	message.channel.send(embed);
};


module.exports.help = {
	aliases: ['ball'],
	name: '8ball',
	description: 'Tells probability of that thing happening',
	usage: `s#8ball Is this bot good?`,
};

