var events = require('events');

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var james = new Person('james');
var me = new Person('me');
var you = new Person('you');
var people = [james, me, you];

people.forEach((person) => {
  person.on('speak', (msg) => {
    console.log(person.name + ' said: ' + msg);
  });
});

james.emit('speak', 'hi there');
me.emit('speak', 'brum brum brummmm');
you.emit('speak', 'yo yo yoooooo');