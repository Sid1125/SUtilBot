const mongo = require('mongoose');
mongo.set('useFindAndModify', false);
const PrefixSchema = new mongo.Schema({
    Prefix: {
        type: String
    },
    GuildID: String
});

module.exports = module.exports = mongo.model('prefixes', PrefixSchema);
