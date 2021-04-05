module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    run(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(c => c.category == 'Infos').map((c) => '`' + c.name + '`').join(', ');
            const music = message.client.commands.filter(c => c.category == 'Music').map((c) => '`' + c.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'BLUE',
                    author: { name: 'Help pannel' },
                    
                    
                    fields: [
                        { name: 'Bot', value: '`debug`, `ping`, `ego`, `stats`, `sum`, `multiply`' },
						{ name: 'No prefix', value: '`dream`, `technoblade`, `wilbursoot`, `bbs`, `rasode me kon tha`, `drista`, `RIP`' },
						{ name: 'Roleplay (no prefix)', value: '`lets fight`, `no u`, `ghostbot`, `so what`' },
						{ name: 'Economy', value: '`bal`, `work`, `daily`, `inv`, `buy`, `shop`, `slots`, `dice`, `cflip`, `trans`, `lb`, `rdaily`' },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                    ],
                    timestamp: new Date(),
                    description: `To use filters, ${client.config.prefix}filter (the filter). Example : ${client.config.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(c => c.aliases && c.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'BLUE',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join('\n'), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};