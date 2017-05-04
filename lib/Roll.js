const Die = require('./Die');

class Roll {
  constructor(numberOfDie = 2) {
    this.dice = [];
    while(this.dice.length < numberOfDie) {
      this.dice.push(Die.throw());
    }
    this.total = this.dice.reduce((total, roll) => total + roll, 0);
  }
};

module.exports = Roll;
