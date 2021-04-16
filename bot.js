const Discord = require('discord.js');
const Sequelize = require('sequelize');
const eco = require("discord-economy");
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const { Users, CurrencyShop } = require('./dbObjects');
const { Op } = require('sequelize');
const { Player } = require('discord-player');
const fs = require('fs');
const currency = new Discord.Collection();
const fetch = require('node-fetch');
const { GiveawaysManager } = require('discord-giveaways');
const prefix = 's#';
const mongo = require('mongoose');
const Schema = require('./models/welcomeChannel');

mongo.connect('mongodb+srv://SUtilBotUser:ssinha@1125@sutilbot-beta.2ecbj.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})

const config = require('./config.json');
client.config = config;

// Init discord giveaways

client.on('guildMemberAdd', async(member) => {
	Schema.findOne({ Guild: member.guild.id }, async(err, data) => {
		if(!data) return;
const user = member.user;

		

const channel = member.guild.channels.cache.get(data.Channel);


channel.send(
                    new Discord.MessageEmbed()
                        .setTitle(`Welcome!, Enjoy your stay at ${member.guild.name}! `)     
                        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5B73NVrODIjdj8OOsYjvBNsxpNR-gm4egBg&usqp=CAU')
                        .setColor("BLUE")
                        .setDescription(`Glad you are here ${member}!!!!\nBe sure to check the Rules of the server!\nYou are the ${member.guild.memberCount}th Member of this Server!!`)
                )


});

});
const alexa = require('alexa-bot-api')
const ai = new alexa();
client.on('message', async (message) => {
    const channelID = '831797823325863937'
    const channel = message.guild.channels.cache.get(channelID);
    if (message.channel.id === channelID) {
        if (message.author.bot) return;
        let content = message.content
        ai.getReply(content).then(async reply => {
            await channel.send(reply)
            await console.log(reply)
        })
    }


})

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
	

});

client.on("message", (message) => { if (message.content == "dream") { message.channel.send("In this video 3 of my friends try and hunt me down! If I kill the Ender Dragon I win but if they kill me once I lose. \nThis is Minecraft Manhunt. \nAlso, only a small percentage of people who watch my videos are subscribed, so make sure you subscribe. This really helps me out a lot! So, let's get straight into the video! \n\n(_Dream Minecraft Manhunt music starts playing!_) \n\n(_Dream killed the Ender Dragon and won!!_)"); } });
client.on("message", (message) => { if (message.content == "technoblade") { message.channel.send("Hail TECHNOBLADE!!!! \n\nTECHNOBLADE NEVER DIES"); } });
client.on("message", (message) => { if (message.content == "wilbursoot") { message.channel.send("2 to the 1 to the 1 to the 3 Please get TommyInnit off my screen!!"); } });
client.on("message", (message) => { if (message.content == "bbs") { message.channel.send("Hey Fellas Beast boy here!"); } });
client.on("message", (message) => { if (message.content == "rasode me kon tha?") { message.channel.send("Rashi Ben"); } });
client.on("message", (message) => { if (message.content == "drista") { message.channel.send("Tommy I need help Dream hit me! Help me TommyInnit!"); } });
client.on("message", (message) => { if (message.content == "lets fight") { message.reply("I am gonna kill you!"); } });
client.on("message", (message) => { if (message.content == "no u") { message.channel.send("Aaaah, You killed me. \nYou won't live a peaceful life!"); } });
client.on("message", (message) => { if (message.content == "ghostbot") { message.channel.send("Boooooo! I am the ghost of the client you killed!"); } });
client.on("message", (message) => { if (message.content == "so what") { message.channel.send("You know what? I won't fight you! \nYou are just a waste of time! \nBYE"); } });
client.on("message", (message) => { if (message.content == "RIP") { message.channel.send("let's keep silence of 2 minutes for Our Loved friend!!"); } });
client.on("message", (message) => { if (message.content == "fuck") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "Fuck") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "Saale") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "Kutte") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "Bitch") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "FUCK") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "fUcK") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "FuCk") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "FUck") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "fuCK") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "kutte") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "saale") {message.delete();
message.reply ("No bad Words allowed!"); } });
client.on("message", (message) => { if (message.content == "bitch") {message.delete();
message.reply ("No bad Words allowed!"); } });


client.player = new Player(client);
client.emotes = require('./config/emojis.json');
client.filters = require('./config/filters.json');
client.commands = new Discord.Collection();
fs.readdir('./commands',(err,files) =>{
  if(err) console.log(err);
  let jsfiles = files.filter(f=> f.split(".").pop() === "js");

  if(jsfiles.length <= 0) {
    console.log(`NO COMMANDS FOUND !`);
  }

console.log(`LOADING ${jsfiles.length} COMMANDS !`);

jsfiles.forEach((f,i)=>{
  let sss = require(`./commands/${f}`);
  console.log(`${i+1}: ${f} Has Been Loaded !`);
  client.commands.set(sss.help.name,sss)
})
})




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	
  });
  client.on("message", async message => {
    if(message.author.client) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = client.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(client, message, args);

});
const core = fs.readdirSync('./commands/core').filter(file => file.endsWith('.js'));
const infos = fs.readdirSync('./commands/infos').filter(file => file.endsWith('.js'));
const music = fs.readdirSync('./commands/music').filter(file => file.endsWith('.js'));



for (const file of core) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/core/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of infos) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/infos/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

for (const file of music) {
    console.log(`Loading command ${file}`);
    const command = require(`./commands/music/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
};

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

Reflect.defineProperty(currency, 'getBalance', {
	/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});



client.once('ready', async () => {
	const storedBalances = await Users.findAll();
storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`s#help in ${client.guilds.cache.size} servers.`, {type: "WATCHING"});
});






client.once('ready', () => {
	 console.log("Connected as " +client.user.tag);
});

const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

client.on('message', async(message) => {
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'muted');
                if(!muterole) {
                    try{
                        muterole = await message.guild.roles.create({
                            name : "muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                    }catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted!');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.channel.send('You have been unmuted!')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})

client.login(process.env.DJS_TOKEN);
