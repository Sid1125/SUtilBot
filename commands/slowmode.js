const { Discord, Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages] })
module.exports.run = async(client,message,args)=>{
    
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission!')

if (!args[0])
      return message.channel.send(
        `You did not specify the time in seconds you wish to set this channel's slow mode!`
      );
      
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    
    message.channel.setRateLimitPerUser(args[0]);
    message.channel.send(
      `Set the slowmode of this channel too **${args[0]}**`
    );
}


module.exports.help ={
    name:"slowmode"
}