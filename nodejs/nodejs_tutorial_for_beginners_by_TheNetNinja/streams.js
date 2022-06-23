var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/random.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', (chunk)=> {
  console.log('new chunk received: ');
  // console.log(chunk);
  myWriteStream.write(chunk);
});