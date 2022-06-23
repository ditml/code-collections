var http = require("http");
var fs = require("fs");

let PORT = 3000;

// var myReadStream = fs.createReadStream(__dirname + "/random.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', (chunk)=> {
//   console.log('new chunk received: ');
//   // console.log(chunk);
//   myWriteStream.write(chunk);
// });

// myReadStream.pipe(myWriteStream);

var server = http.createServer((req, res) => {
  console.log("request received @" + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/random.txt", "utf8");
  myReadStream.pipe(res);
});

server.listen(PORT, "127.0.0.1");
console.log("Your Server App is now ready and listening to Port " + PORT);
console.log("Click to Test in a browser >> http://localhost:3000/mama-mia");
