//documentation(comments) by: Zach Lawless

/**
 * creates a random number
 * @returns random number from 1 to 10
 * to be called within prototype.roll, not to be called outside 
 
 */
function rollDie () {
  return Math.ceil(Math.random() * 10)
}
/**
 * Represents essentially a dice object with several parameters
 * @constructor
 * @param {int} dices - Number of dice to roll.
 * @param {bool} weak - Set pool as weak. 10's do not reroll and 1's cancel successes 
 * @param {int} rerollOn - rerolls on that number.
 */
Pool = function(){
  this.dices = 0
  this.weak = false
  this.rerollOn = 10

  if (typeof arguments[0] === "number") {
    this.dices = parseInt(arguments[0], 10)
  }
  if (typeof arguments[0] === "object") {//set the pool function to another and the values will be replaced
    var config = arguments[0]

    this.dices    = config.dices || this.dices
    this.weak     = config.weak || this.weak
    this.rerollOn = config.rerollOn || this.rerollOn
  }
};
/**
 * adds a specified number of die to a pool object
 * @param {int} dices - Number of dice.
 * @returns modification to pool object
 */
Pool.prototype.addDice = function (dices) {
  this.dices = this.dices + parseInt(dices, 10)

  return this;
};
/**
 * removes a specified number of die from a pool object
 * @param {int} dices - Number of dice.
 * @returns modification to pool object
 */
Pool.prototype.removeDice = function (dices) {
  this.dices = this.dices - parseInt(dices, 10)

  return this;
};
/**
 * removes a specified number of die from the pool object
 * @param {int} penalty - Number of dice to take away.
 * @returns modification to pool object by invoking removeDice()
 */
Pool.prototype.penalty = function (penalty) {
  return this.removeDice(penalty)
};
/**
 * checks to see if a pool is weak;
 * Set pool as weak means 10's do not reroll and 1's cancel successes
 * @param {int} penalty - Number of dice to take away.
 * @returns {boolean} is weak or not
 */
Pool.prototype.isWeak = function () {
  this.weak = true

  return this;
};
/**
 * sets pool to roll again on threshold and above
 * 
 * @param {int} threshold - number to reroll on or above.
 * @returns adjustment to pool
 */
Pool.prototype.reroll = function (threshold) {
  this.rerollOn = parseInt(threshold, 10)

  return this;
};
/**
 * sets pool to roll again on threshold and above
 * 
 * @param pool
 * @returns {boolean} whether or not the number of dice in the pool is zero
 */
Pool.prototype.isChanceRoll = function () {
  return (this.dices < 1)
}
/**
 * rolls a pool of dice to to find the successes
 * The target number is 8, roll at or above 8 and that is a success.
 * Standard setup gives you a reroll if you get a 10(like a bonus)
 * setting the reroll to 8 makes for more successes
 * 
 * @param pool
 * @returns {int} number of successes in the rolls
 */
Pool.prototype.roll = function () {
  var successes = 0,
      roll;

  if (this.isChanceRoll()) {//if there are dice remaining in the pool
    while (true) {
      roll = rollDie()

      if (roll === 10) {//10 is a success
        successes++
      } else if(roll === 1) {//1 subtracts a success
        successes--
      }
      if (this.weak || roll < 10) {//ends if there is no success and the dice is weak
        break
      }
    }
  } else {
    for (var i = 0; i < this.dices; i++) {
      roll = rollDie()

      if (roll >= 8) {//if the random roll is greater than 10 then it is a success
        successes++
      }
      if (!this.weak && roll >= this.rerollOn) {//add another dice if the roll is greater or equal to the roll
        this.dices++
      }
      if (this.weak && roll === 1) {//subtract success when one is rolled and weak=true
        successes--
      }
    }
  }

  return (this.isChanceRoll()) ? successes : Math.max(0, successes);//return number of successes
};

exports.Pool = Pool;//export success to the pool variable


