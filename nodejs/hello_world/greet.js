var greet = function() {
  console.log("Hello World")
}

//this module is exposing the greet func
module.exports = greet;

//exports is a special object
//where I choose what becomes available
//outside of the module for use