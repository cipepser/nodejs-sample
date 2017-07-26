var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');
var settings = require('./settings')
var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');

var n = 0;
server.on('request', function(req, res) {
  n++;
  var data = ejs.render(template, {
    title: "hello",
    content: "<strong>World</strong>",
    n: n
  });

  res.writeHead(200, {'Content-Tyep': 'text/html'});
  res.write(data);
  res.end();
// });
  
  // switch (req.url) {
  //   case '/about':
  //     msg = "about this page";
  //     break;
  //   case '/profile':
  //     msg = "about me";
  //     break;
  //   default:
  //     msg = "wrong page";
  //     break;
  // }
  
});

server.listen(settings.port, settings.host);
console.log("server listening ...");
