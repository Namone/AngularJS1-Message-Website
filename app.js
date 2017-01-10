var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var engines = require('consolidate');

var appRoutes = require('./routes/app.routes');

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

mongoose.connect("mongodb://localhost:27017/angular_messenger");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/messages', appRoutes);
app.use(express.static(path.join(__dirname, 'public')));

var port = 8080;
app.listen(port, function() {
    console.log('Listening on port ' + port + '...');
});

module.exports = app;