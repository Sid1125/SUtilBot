const { EmbedBuilder } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
  name: 'help',
  description: 'Displays a list of available commands or information about a specific command.',
  aliases: ['commands'],
  usage: '[command name]',
  execute(message, args) {
    const { commands } = message.client;

    if (!args.length) {
      const helpEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Command List')
        .setDescription('Here is a list of all available commands:')
        .setThumbnail(message.client.user.displayAvatarURL())
        .setFooter({text : `Use ${prefix}help <command> to get more info on a command.`})

        .addFields(commands.map(command => {
            return {
              name: `**${prefix}${command.name} ${command.usage ? command.usage : ''}**`,
              value: `${command.description}`,
              inline: false
            }
          }));
  
        return message.channel.send({ embeds: [helpEmbed] });
      } else {
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
  
        if (!command) {
          return message.reply("that's not a valid command!");
        }
  
        const helpEmbed = new EmbedBuilder()
          .setColor('#0099ff')
          .setTitle(`Help: ${command.name}`)
          .setDescription(`${command.description}`)
          .setThumbnail(message.client.user.displayAvatarURL())
          .addField('Usage', `${prefix}${command.name} ${command.usage ? command.usage : ''}`);
  
        if (command.aliases) helpEmbed.addField('Aliases', command.aliases.join(', '));
        if (command.example) helpEmbed.addField('Example', command.example);
  
        return message.channel.send({ embeds: [helpEmbed] });
      }
    }
  };