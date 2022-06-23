var http = require("http");
var fs = require("fs");
const { stringify } = require("querystring");

let PORT = 3000;

var server = http.createServer((req, res) => {
  console.log("request received @" + req.url);
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if( req.url === '/contact') {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/ninjas') {
    var ninjas = [{name: 'nani', age: 32}, {name: 'little', age: 26}];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

});

server.listen(PORT, "127.0.0.1");
console.log("Your Server App is now ready and listening to Port " + PORT);
console.log("Click to Test in a browser >> http://localhost:3000/mama-mia");