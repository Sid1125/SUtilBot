const mongo = require('mongoose');

const Schema = new mongo.Schema({
    User: String,
});

module.exports = mongo.model("premium", Schema);