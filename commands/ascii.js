/* eslint-disable no-unused-vars */
const Discord = require('discord.js');

const figlet = require('figlet');

module.exports.run = async (client, message, args, utils) => {
	if (!args[0]) return message.channel.send('Please provide some text');

	const message2 = args.join(' ');
	figlet(message2, function(err, data) {
		if (err) {
			console.log(data);
			console.dir(err);
		}

		message.channel.send('```' + data + '```');
	});
};


module.exports.help = {
	aliases: [],
	name: 'ascii',
	description: 'Turn text into ascii',
	usage: 's#ascii',
};
