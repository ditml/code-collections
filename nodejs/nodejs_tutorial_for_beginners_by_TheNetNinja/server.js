var http = require('http');

var PORT = 3000;

var server = http.createServer((req, res)=> {
  console.log('request received @' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hey folks');
});

server.listen(PORT, '127.0.0.1');
console.log('Your Server App is now ready and listening to Port '+ PORT);
console.log('Click to Test in a browser >> http://localhost:3000/mama-mia');