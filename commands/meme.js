const axios = require('axios');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'meme',
  description: 'Sends a random meme from r/memes',
  async execute(message) {
    try {
      const response = await axios.get('https://www.reddit.com/r/memes/random.json');
      const data = response.data[0].data.children[0].data;
      const title = data.title;
      const image = data.url;
      const subreddit = data.subreddit_name_prefixed;

      const embed = new EmbedBuilder()
        .setColor('#1ad0f6')
        .setTitle(title)
        .setURL(`https://www.reddit.com${data.permalink}`)
        .setImage(image)
        .setFooter({text:subreddit});

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.reply('Sorry, an error occurred while processing the command.');
    }
  },
};