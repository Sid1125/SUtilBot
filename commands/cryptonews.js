const axios = require('axios');
const { Client, Intents, Message, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


 
module.exports.run = async (client, message, args) => {
const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=crypto&apiKey=63ae3b849c1f49d0909119396a5276ce&pageSize=1&sortBy=publishedAt`
      );

      // Destructure useful data from response
      const {
        title,
        source: { name },
        description,
        url,
      } = data.articles[0];

      return message.reply(
        `Latest news related to crypto:\n
        Title: ${title}\n
        Description:${description}\n
        Source: ${name}\n
        Link to full article: ${url}`
      );
}


module.exports.help = {
	name: 'cryptonews'
};