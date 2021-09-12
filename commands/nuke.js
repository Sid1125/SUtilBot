const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
module.exports.run = (client,message,args)=>{


        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send('missing permissions')
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send('nuked https://tenor.com/view/pepe-nuke-apocalypse-meme-gif-9579985')
        })
        message.channel.delete()


}
module.exports.help ={
    name:"nuke"
}
