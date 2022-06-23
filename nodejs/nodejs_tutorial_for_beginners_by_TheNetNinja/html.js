var http = require("http");
var fs = require("fs");

let PORT = 3000;

var server = http.createServer((req, res) => {
  console.log("request received @" + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});

server.listen(PORT, "127.0.0.1");
console.log("Your Server App is now ready and listening to Port " + PORT);
console.log("Click to Test in a browser >> http://localhost:3000/mama-mia");