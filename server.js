var http = require('http');
var settings = require('./settings')
var server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Tyep': 'text/plain'});
  res.write('hello world!!!');
  res.end();
});

server.listen(settings.port, settings.host);
console.log("server listening ...");
