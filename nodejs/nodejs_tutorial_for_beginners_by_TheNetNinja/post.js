var express = require('express');
var bodyParser = require('body-parser');

var server = express();
var urlencodedParser = bodyParser.urlencoded({extended: false});

server.set('view engine', 'ejs');

server.use('/assets', express.static('assets'));
// server.use(urlencodedParser);


server.get('/', function(req, res) {
  res.render('index');
});

server.get('/contact', function(req, res) {
  res.render('contact', {qs: req.query});
});

server.post('/contact', urlencodedParser, function(req, res) {
  console.log('post received...');
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

server.get('/profile/:name', (req, res)=> {
  var data = {age: 27, place: 'little', hobbies: ['eating nuts', 'jumping', 'athletics', 'grooming tail']};
  res.render('profile', {person: req.params.name, data: data});
});

server.listen(3000);

//  http://localhost:3000/profile/Hara