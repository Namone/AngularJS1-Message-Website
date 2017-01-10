var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    content: { type: String, required: true },
    author: { type: String },
});

module.exports = mongoose.model('Message', messageSchema); // so we can use it