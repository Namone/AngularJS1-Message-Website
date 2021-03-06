var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema); // so we can use it