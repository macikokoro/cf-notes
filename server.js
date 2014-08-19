var express = require('express');
var http = require('http');
bodyparser = require('body-parser'); // No longer part of express core
var mongoose = require('mongoose');
var app = express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/notes-development');

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.use(bodyparser.json()); // Invoke the middleware

var port = process.env.PORT || 3000;
exports.port = port;

require('./routes/noteRoutes')(app);
/*
Note that the routing module changes *the app itself*, so it's different by 
the time we create var server  after this.
*/

var server = http.createServer(app);

server.listen(port, function() {
	console.log('server running on port ' + port);
});