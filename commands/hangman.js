const { hangman } = require("reconlx");

module.exports.run = async(client,message,args)=>{

// making hangman
const hang = new hangman({
    message: message,
    word: args.slice(1).join(" "),
    client: client,
    channelID: message.mentions.channels.first(),
});

// starting the game
hang.start();

}

module.exports.help ={
    name:"hangman"
}