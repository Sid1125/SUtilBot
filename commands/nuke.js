const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.run = (client,message,args)=>{


        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send({content: 'missing permissions'})
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            channel.send({content: 'nuked https://tenor.com/view/pepe-nuke-apocalypse-meme-gif-9579985'})
        })
        message.channel.delete()


}
module.exports.help ={
    name:"nuke"
}
