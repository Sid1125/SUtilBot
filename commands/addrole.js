const Discord = require('discord.js');
const client = new Discord.Client();



module.exports.run = async(client,message,args)=>{
//!addrole @user @role
 if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry Pal! You don't have the correct Perms right now! Permissions Needed:- MANAGE_MEMBERS");


}

module.exports.help ={
    name:"addrole"
}
