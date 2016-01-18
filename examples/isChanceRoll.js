//true or false whether or not the pool has 0 or more dice
var y = require("./../index.js");
var pool = new Pool(2);
console.log(pool.isChanceRoll());
var pool2 = new Pool(0);
console.log(pool2.isChanceRoll());

