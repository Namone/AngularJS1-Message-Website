var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var engines = require('consolidate');

var appRoutes = require('./routes/app.routes');

// Our models
var Message = require('./models/message.model');

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

// Set default URL for files
app.set('views', path.join(__dirname, 'public'));
console.log("Looking in " + path.join(__dirname, 'public'));
app.engine('html', engines.mustache);
app.set('view engine', 'html')

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb://localhost:27017/angular_messenger");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

// Post messages
app.post('/messages', function(req, res, next) {

    var message = new Message({
        content: req.body.content,
        author: req.body.author,
    });

    message.save(function(err, success) {
        if (err) {
            return console.log(err);
        } else {
            console.log("Message added!");
        }
    });
});

// Get messages
app.get('/messages', function(req, res, next) {
    Message.find()
        .exec(function(err, success) {
            
            if (err) {
                return res.status(500).json({
                    title: 'Error retrieving messages!',
                    error: err
                });
                console.log(err);
            }

            res.status(200).json({
                title: 'Successfully retrieved messages!',
                data: success, // pass data back
                
            });
            console.log("Retreived following messages: \n\n" + success);
        });
});

var port = 8080;
app.listen(port, function() {
    console.log('Listening on port ' + port + '...');
});

module.exports = app;