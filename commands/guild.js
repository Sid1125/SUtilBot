const { Discord, Client, MessageEmbed } = require('discord.js') 
module.exports.run = async(client, message, args) =>{
   let serverlist = ''

if(!message.author.tag == '699257426712592385') message.channel.send('This command is only for my OWNER - Minecraft Geek | ᴘɪᴇ ɢᴀɴɢ#0282');
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat( "** - **" + guild.name + "| ID: " + guild.id + `| Members:`+ guild.memberCount + "\n"  )
        })
    
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Servers that have  Bot`, '')
        .setDescription(serverlist)
        message.channel.send({embed});
  }
module.exports.help ={
    name:"guilds"
}
