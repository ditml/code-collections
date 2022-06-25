var express = require('express');
var server = express();

server.set('view engine', 'ejs');

server.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

server.get('/profile/:name', (req, res)=> {
  var data = {age: 27, place: 'little', hobbies: ['eating nuts', 'jumping', 'athletics', 'grooming tail']};
  res.render('profile', {person: req.params.name, data: data});
});

server.listen(3000);

//  http://localhost:3000/profile/Hara