//var x = require("./../lib/main.js");
var y = require("./../index.js");

//var test = rollDie();
//var test2 = require('/Users/ZachL/Desktop/Node HW2 resources/WoD-Dice/lib/main.js').rollDie();
//console.log(test2);


//var test3 = rollDie();
//console.log(test3);
//console.log(rollDie());
var pool = new Pool(7); // create pool with 7 dice
var successes = pool.roll(); // Roll pool and return successes
console.log(successes);
var successes2 = pool.reroll();
console.log(successes2);
console.log(rollDie())