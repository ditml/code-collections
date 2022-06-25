var express = require('express');

var server = express();

server.get('/', function(req, res) {
  res.send('this is the homepage');
});

server.get('/contact', function(req, res) {
  res.send('this is the contact page');
});

server.listen(3000);