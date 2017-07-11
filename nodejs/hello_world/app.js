// ./ = same folder
// calling module by setting variable
var greet = require('./greet.js');
// this returns module.exports in greet
// and then invoke greet()
greet();

function greet2() {
  console.log('hi');
}

function logGreeting(name) {
  name();
}

logGreeting(greet2);

// function expression = anonymous funcs
var greetMe = function() {
  console.log('Hi Tony');
}
greetMe();
