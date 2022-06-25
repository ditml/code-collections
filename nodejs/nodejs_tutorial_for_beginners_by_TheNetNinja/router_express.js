var express = require('express');

var server = express();

server.get('/', function(req, res) {
  res.send('this is the homepage');
});

server.get('/contact', function(req, res) {
  res.send('this is the contact page');
});

server.get('/profile/:id', (req, res)=> {
  res.send('You requested to see a proile with the id of ' + req.params.id);
});
server.get('/profile/:name', (req, res)=> {
  res.send('You requested to see a proile with the id of ' + req.params.name);
});

server.listen(3000);

// http://localhost:3000/profile/213
// http://localhost:3000/profile/Hara
