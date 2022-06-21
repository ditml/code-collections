var counter = (arr) => {
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = (a,b) => {
  return `The sum of the 2 numbers is ${a+b}`;
}


// module.exports = counter;  // Single Object export

// module.exports.counter = counter;  // Adding over export object
// module.exports.adder = adder;
// module.exports.pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: 3.142,
}