// server.js

var express = require('express');
var app = express();
var router = express.Router();

// static files
app.use(express.static(__dirname + '/public'));

// routes 
// require('./app/routes')(app, router);

// start app 
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;