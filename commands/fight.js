
const { fight } = require('weky')
const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })

module.exports.run =async (client, message, args) => {

    if(!message.mentions.users.first())return message.reply('Ping someone please!!')
const x = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with ' + message.author,
    challenger: message.author,
    opponent: message.mentions.users.first()
})
x.start()

}


module.exports.help = {
    name: "fight",

    };