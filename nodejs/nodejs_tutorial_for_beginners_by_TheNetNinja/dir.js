var fs = require('fs');

// // TO create and delete a folder synchronously
// fs.mkdirSync('xxfs'); 
// console.log('just created dir xxfs');
// console.log('gonna delete dir xxfs in 3 seconds');
// fs.rmdirSync('xxfs');

// // TO create a folder&file synchronously
// fs.mkdir('stuff', () => {
//   console.log('just create dir stuff');
//   fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     fs.writeFile('./stuff/writeMe.txt', data, (err)=> {});
//     console.log('just copied readMe.txt to writeMe.txt in ./stuff dir');
//   });
// });

// TO delete a folder&file synchronously
fs.unlink('./stuff/writeMe.txt', function(){
  console.log('just deleted ./stuff/writeMe.txt file');
  console.log('now ./stuff dir is empty');
  fs.rmdirSync('./stuff');
  console.log('./stuff dir deleted');
});

