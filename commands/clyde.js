/* eslint-disable no-unused-vars */
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

const fetch = require('node-fetch');

module.exports.run = async (client, message, args, utils) => {
	const text = args.join(' ');

	if (!text) {
		return message.channel.send('**Enter Text**');
	}

	const m = await message.channel.send('<a:loadingonline:787905402603438100>');
	try {
		const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
		const json = await res.json();
		const attachment = new Discord.MessageAttachment(json.message, 'clyde.png');
		message.channel.send(attachment);
		m.delete({ timeout: 5000 });
	}
	catch (e) {
		m.edit(e.message);
	}
};

module.exports.help = {
	aliases: ['cly'],
	name: 'clyde',
	description: 'send a msg as clyde',
	usage: 's#clyde',
};

