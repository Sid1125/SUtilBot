module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    run(client, message) {
        message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
    },
};