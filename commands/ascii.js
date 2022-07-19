/* eslint-disable no-unused-vars */
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

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
