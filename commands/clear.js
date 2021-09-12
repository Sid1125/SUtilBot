const Discord = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


module.exports.run = async(client,message,args)=>{
    if(!args[0]) return message.channel.send('Please specify a number of messages to delete ranging from 1 - 99')
    if(isNaN(args[0])) return message.channel.send('Numbers are only allowed')
    if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages that I can delete is 99')
    await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))
    message.channel.send('Deleted ' + args[0]  + " messages.")
}

module.exports.help ={
    name:"clear",
}