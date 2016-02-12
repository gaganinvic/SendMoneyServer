var express = require('express');
var http = require('http');

var app = express();
var httpPort = 3000;

// Bootstrap application settings
require('./config/express')(app);
// Bootstrap routes
require('./config/routes')(app);

http.createServer(app).listen(httpPort, function(){
    console.log("http server started on port : ", httpPort);
});

/**
 * Expose
 */

module.exports = app;
