//var x = require("./../lib/main.js");
var y = require("./../index.js");

var pool = new Pool(7); // create pool with 7 dice
var successes = pool.roll(); // Roll pool and return successes
console.log(successes);
var successes2 = pool.reroll();
console.log(successes2);
