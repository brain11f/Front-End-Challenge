
'use strict';

var http = require('http');
var fs = require('fs');
var PORT = 3000;

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.readFile('./app/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('./app/404.html', function(err, data) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  };
});

server.listen(PORT, function() {
  console.log("Successful connection on port " + PORT + ".");
});