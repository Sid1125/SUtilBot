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
const PREFIX = 's#';

Reflect.defineProperty(currency, 'add', {
	/* eslint-disable-next-line func-name-matching */
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});

client.on("message", (message) => { if (message.content == "dream") { message.channel.send("In this video 3 of my friends try and hunt me down! If I kill the Ender Dragon I win but if they kill me once I lose. \nThis is Minecraft Manhunt. \nAlso, only a small percentage of people who watch my videos are subscribed, so make sure you subscribe. This really helps me out a lot! So, let's get straight into the video! \n\n(_Dream Minecraft Manhunt music starts playing!_) \n\n(_Dream killed the Ender Dragon and won!!_)"); } });
client.on("message", (message) => { if (message.content == "technoblade") { message.channel.send("Hail TECHNOBLADE!!!! \n\nTECHNOBLADE NEVER DIES"); } });
client.on("message", (message) => { if (message.content == "wilbursoot") { message.channel.send("2 to the 1 to the 1 to the 3 Please get TommyInnit off my screen!!"); } });
client.on("message", (message) => { if (message.content == "bbs") { message.channel.send("Hey Fellas Beast boy here!"); } });
client.on("message", (message) => { if (message.content == "rasode me kon tha?") { message.channel.send("Rashi Ben"); } });
client.on("message", (message) => { if (message.content == "drista") { message.channel.send("Tommy I need help Dream hit me! Help me TommyInnit!"); } });
client.on("message", (message) => { if (message.content == "lets fight") { message.reply("I am gonna kill you!"); } });
client.on("message", (message) => { if (message.content == "no u") { message.channel.send("Aaaah, You killed me. \nYou won't live a peaceful life!"); } });
client.on("message", (message) => { if (message.content == "ghostclient") { message.channel.send("Boooooo! I am the ghost of the client you killed!"); } });
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
client.on('message', message => {
	if (!message.content.startsWith(PREFIX) || message.author.client) return;

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'stats') {
		return message.channel.send(`Server count: ${client.guilds.cache.size}`);
	}
	if (command === 'users') {
		return message.channel.send(`User count: ${client.users.cache.size}`);
	}
	if(command === 'help') {
    return message.channel.send('INCOMING HELP - COMMANDS LIST :=========		');

  }
  if(command === 'nsfw') {
    return message.channel.send('NSFW chahiye hai? Chappal uthake maarunga pagal!');

  }
  if (command === 'hack') {
	  return message.channel.send('Download the file here - https://cdn.discordapp.com/attachments/769795970266824746/787933601408090172/LOVE.bat');
  }
  if(command === 'dev') {
    message.reply(`My Developer is ITSCREEPY1125 | ᴘɪᴇ ɢᴀɴɢ 🍰#0282`);
  }
  if (command === 'clientserver') {
		return message.channel.send('Join our main server with this link - https://discord.gg/r4jbDAZz5n');
	}
	if (command === 'kill') {

    var user = message.mentions.users.first()
	if (!user) return message.reply('Mention the user you want to kill!')
	message.reply(`You gave ${user} a Patt Se Headshot!`);
  }



});

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

const prefix = 's#'





//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on('message', async message => {

  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(prefix.length).split(' ')[0];

  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);

  //If the message does not start with your prefix return.
  //If the user that types a message is a client account return.
  if (!message.content.startsWith(prefix) || message.author.client) return;
if (!message.content.startsWith(PREFIX)) return;
	const input = message.content.slice(PREFIX.length).trim();
	if (!input.length) return;
	const [,commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

  if (command === 'bal') {

    var output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);
  }

  if (command === 'daily') {

    var output = await eco.Daily(message.author.id)
    //output.updated will tell you if the user already claimed his/her daily yes or no.

    if (output.updated) {

      var profile = await eco.AddToBalance(message.author.id, 100)
      message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`);

    } else {
      message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }

  }

  if (command === 'rdaily') {

    var output = await eco.ResetDaily(message.author.id)

    message.reply(output) //It will send 'Daily Reset.'

  }

  if (command === 'lb') {

    //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
    //(message.author.id + message.guild.id) can be your way to store guild based id's
    //filter: x => x.userid.endsWith(message.guild.id)

    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {

      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on my leaderboard!`);

    } else {

      eco.Leaderboard({
        limit: 3, //Only takes top 3 ( Totally Optional )
        filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
      }).then(async users => { //make sure it is async

        if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place

        message.channel.send(`My leaderboard:

1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)

      })

    }
  }

  if (command === 'trans') {

    var user = message.mentions.users.first()
    var amount = args[1]

    if (!user) return message.reply('Reply the user you want to send money to!')
    if (!amount) return message.reply('Specify the amount you want to pay!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to transfer!')

    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    message.reply(`Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
  }

  if (command === 'cflip') {

    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble

    if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)

  }

  if (command === 'dice') {

    var roll = args[0] //Should be a number between 1 and 6
    var amount = args[1] //Coins to gamble

    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('Specify the roll, it should be a number between 1-6')
    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
    message.reply(`The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`)

  }

  if (command == 'delete') { //You want to make this command admin only!

    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')

    if (!message.guild.me.hasPermission(`ADMINISTRATION`)) return message.reply('You need to be admin to execute this command!')

    var output = await eco.Delete(user.id)
    if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')

    message.reply('Error: Could not find the user in database.')

  }

  if (command === 'work') { //I made 2 examples for this command! clienth versions will work!

    var output = await eco.Work(message.author.id)
    //50% chance to fail and earn nothing. You earn between 1-100 coins. And you get one out of 20 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)


    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 500),
      jobs: ['cashier', 'shopkeeper']
    })
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')

    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)

  }

  if (command === 'slots') {

    var amount = args[0] //Coins to gamble

    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    message.channel.send(gamble.grid)//Grid checks for a 100% match vertical or horizontal.
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)

  }
if (command === 'inv') {
		const target = message.mentions.users.first() || message.author;
const user = await Users.findOne({ where: { user_id: target.id } });
const items = await user.getItems();

if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
return message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	}
if (command === 'buy') {
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
if (!item) return message.channel.send(`That item doesn't exist.`);
if (item.cost > currency.getBalance(message.author.id)) {
	return message.channel.send(`You currently have ${currency.getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
}

const user = await Users.findOne({ where: { user_id: message.author.id } });
currency.add(message.author.id, -item.cost);
await user.addItem(item);

message.channel.send(`You've bought: ${item.name}.`);
	}
if (command === 'shop') {
		const items = await CurrencyShop.findAll();
return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });
	}


});
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

/*
 * equivalent to: CREATE TABLE tags(
 * name VARCHAR(255),
 * description TEXT,
 * username VARCHAR(255),
 * usage INT
 * );
 */
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});
client.once('ready', () => {
	 Tags.sync();
});
client.once('ready', () => {
	 console.log("Connected as " +client.user.tag);
});

client.on('message', async message => {
	if (message.content.startsWith(PREFIX)) {
		const input = message.content.slice(PREFIX.length).trim().split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');

		if (command === 'addtag') {
			const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

try {
	// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
	const tag = await Tags.create({
		name: tagName,
		description: tagDescription,
		username: message.author.username,
	});
	return message.reply(`Tag ${tag.name} added.`);
}
catch (e) {
	if (e.name === 'SequelizeUniqueConstraintError') {
		return message.reply('That tag already exists.');
	}
	return message.reply('Something went wrong with adding a tag.');
}
		} else if (command === 'tag') {
			const tagName = commandArgs;

// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
const tag = await Tags.findOne({ where: { name: tagName } });
if (tag) {
	// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
	tag.increment('usage_count');
	return message.channel.send(tag.get('description'));
}
return message.reply(`Could not find tag: ${tagName}`);
		} else if (command === 'edittag') {
			const splitArgs = commandArgs.split(' ');
const tagName = splitArgs.shift();
const tagDescription = splitArgs.join(' ');

// equivalent to: UPDATE tags (description) values (?) WHERE name='?';
const affectedRows = await Tags.update({ description: tagDescription }, { where: { name: tagName } });
if (affectedRows > 0) {
	return message.reply(`Tag ${tagName} was edited.`);
}
return message.reply(`Could not find a tag with name ${tagName}.`);
		} else if (command === 'taginfo') {
			const tagName = commandArgs;

// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
const tag = await Tags.findOne({ where: { name: tagName } });
if (tag) {
	return message.channel.send(`${tagName} was created by ${tag.username} at ${tag.createdAt} and has been used ${tag.usage_count} times.`);
}
return message.reply(`Could not find tag: ${tagName}`);
		} else if (command === 'showtags') {
			// equivalent to: SELECT name FROM tags;
const tagList = await Tags.findAll({ attributes: ['name'] });
const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
return message.channel.send(`List of tags: ${tagString}`);
		} else if (command === 'removetag') {
			const tagName = commandArgs;
// equivalent to: DELETE from tags WHERE name = ?;
const rowCount = await Tags.destroy({ where: { name: tagName } });
if (!rowCount) return message.reply('That tag did not exist.');

return message.reply('Tag deleted.');
		}
	}
});



client.on('message', (receivedMessage) => {
    // Prevent client from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    // Check if the client's user was tagged in the message
    if (receivedMessage.content.includes(client.user.toString())) {
        // Send acknowledgement message
        receivedMessage.channel.send("Message received from " +
            receivedMessage.author.toString() + ": " + receivedMessage.content)
    }
})


client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent client from responding to its own messages
        return
    }

    if (receivedMessage.content.startsWith("s#")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(2) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments



if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)}
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

client.on("message", function(message) {
  if (message.author.client) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase()

 if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
}
});




client.on('message', async (msg) => {
  //if our message doesnt start with our defined prefix, dont go any further into function
  if(!msg.content.startsWith(prefix)) {
    console.log('no prefix')
    return
  }

  //slices off prefix from our message, then trims extra whitespace, then returns our array of words from the message
  const args = msg.content.slice(prefix.length).trim().split(' ')

  //splits off the first word from the array, which will be our command
  const command = args.shift().toLowerCase()
  //log the command
  console.log('command: ', command)
  //log any arguments passed with a command
  console.log(args)
  if(command === 'ego') {
    msg.react("😀")
    msg.reply('wow, what a great post')
  }



if(command === 'invite') {
    msg.reply('Invite the client to your server with this link - https://discord.com/api/oauth2/authorize?client_id=756538469106581554&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A53134&scope=client')
  }

  if (command === "clear") {
    //default deletes message itself plus previous
    let num = 100;

    //if argument is provided, we need to convert it from string to number
    if (args[0]) {
      //add 1 to delete clear command itself
      num = parseInt(args[0]) + 1;
    }
    //bulk delete the messages
    msg.channel.bulkDelete(num);
    //notify channel of deleted messages
    msg.channel.send(`deleted  ${args[0]} posts for you`);
  }
  if(command === 'joke') {
    //async API call using async/await syntax
    let getJoke = async () => {
      //make API call
      let result = await fetch('https://official-joke-api.appspot.com/random_joke')
      //convert to object we can work with
      let json = await result.json()
      return json
    }
    //call function defined above
    let joke = await getJoke()

    //have our client reply using the data returned from our API call
    msg.reply(`
    Here's your joke
    ${joke.setup}
    ${joke.punchline}
    `)
  }
  if(command === 'kick') {
    //verify that user has moderation role
	if (!msg.guild.me.hasPermission(`ADMINISTRATION`)) {
	return msg.reply('You need to be admin to execute this command!')

      return
    }
    //check to make sure a user was actually mentioned, if not we return because client doesnt know who to kick
    const user = msg.mentions.users.first()
    if(!user) {
      msg.reply('no user mentioned')
      return
    }
    //if user was mentioned, grab their guild member information
    const member = msg.guild.member(user)
    //if they are a member of the server, kick them
    if(member) {
      member.kick('this is a message for the server logs').then(() => {
        msg.reply(`${user.tag} was kicked from the server`)
      })
    }
  }
  if(command === 'ban') {
    //verify that user has moderation role
    if (!msg.guild.me.hasPermission(`ADMINISTRATION`)) {
	return msg.reply('You need to be admin to execute this command!')

      return
    }
    //check to make sure a user was actually mentioned, if not we return because client doesnt know who to ban
    const user = msg.mentions.users.first()
    if(!user) {
      msg.reply('no user mentioned')
      return
    }
    //if user was mentioned, grab their guild member information
    const member = msg.guild.member(user)
    //if they are a member of the server, ban them
    if(member) {
      member.ban('this is a message for the server logs').then(() => {
        msg.reply(`${user.tag} was banned from the server`)
      })
    }
  }

})


client.login("NzU2NTM4NDY5MTA2NTgxNTU0.X2TTWg.ATyc8ENWTesf_1uYpETBgmA8HA4");
