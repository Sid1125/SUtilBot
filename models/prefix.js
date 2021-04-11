const mongo = require('mongoose');

const PrefixSchema = new mongo.Schema({
    Prefix: {
        type: String
    },
    GuildID: String
});

module.exports = module.exports = mongo.model('prefixes', PrefixSchema);
