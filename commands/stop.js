const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  name: 'stop',
  description: 'Stops the currently playing song',
  execute(interaction) {
    const voiceChannel = interaction.member.voice.channel;
    if (!voiceChannel) {
      return interaction.reply({ content: 'You need to be in a voice channel to stop the music!', ephemeral: true });
    }

    const connection = getVoiceConnection(voiceChannel.guild.id);
    if (!connection) {
      return interaction.reply({ content: 'I am not currently playing any music!', ephemeral: true });
    }

    connection.destroy();
    return interaction.reply({ content: 'Stopped playing and left the voice channel!', ephemeral: true });
  },
};