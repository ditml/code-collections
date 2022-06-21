console.log('hello');

setTimeout(() => {
  console.log('3 seconds have passed');
}, 3000);

var time = 0;
setInterval(() => {
  time += 1;
  console.log(time + ' seconds have passed')
}, 1000);

console.log(__dirname);
console.log(__filename);