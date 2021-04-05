module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    run(client, message) {
        message.channel.send(`${client.emotes.success} - Robot connected in **${client.voice.connections.size}** channels !`);
    },
};