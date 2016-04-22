var Die = {
  throw: function () {
    return Math.floor((Math.random() * 6) + 1);
  }
};

var RollDie = function() {
  var dieOne = Die.throw();
  var dieTwo = Die.throw();

  this.total = dieOne + dieTwo;

  return this;
};

var roll = new RollDie();

console.log(roll.total);