//rolls a pool again if it is at or above the threshold
var y = require("./../index.js");
var pool = new Pool(2);
console.log(pool.reroll(5));//sets pool to reroll a 1 and above
console.log(pool.roll());



