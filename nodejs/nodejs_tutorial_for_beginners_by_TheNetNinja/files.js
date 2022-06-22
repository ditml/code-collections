var fs = require('fs');

fs.readFile('readme_first.txt', 'utf-8', (err, data) => {
  fs.writeFile('writeMe_first.txt', data, (err) => {});
  console.log(data);
});

var readme = fs.readFileSync('readme.txt', 'utf-8');
console.log(readme);

fs.writeFileSync('writeMe.txt', readme);

fs.unlink('writeMe.txt');