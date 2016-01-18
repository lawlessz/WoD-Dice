//check if dice is weak
var y = require("./../index.js");
var pool = new Pool(2);
pool.weak = true;
console.log(pool.isWeak());


