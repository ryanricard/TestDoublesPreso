var Die = require('./Die');

var RollDie = function() {
  var dieOne = Die.throw();
  var dieTwo = Die.throw();

  this.total = dieOne + dieTwo;

  return this;
};

module.exports = RollDie;