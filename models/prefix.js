const mongo = require('mongoose');

const PrefixSchema = new mongo.Schema({
    Prefix: {
        type: String
    },
    GuildID: String
});

const MessageModel = module.exports = mongo.model('prefixes', PrefixSchema);
