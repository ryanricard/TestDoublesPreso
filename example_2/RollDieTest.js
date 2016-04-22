var expect = require('chai').expect;
var Die = require('./Die');
var RollDie = require('./RollDie');

describe('RollDie', function() {
  it('should correctly add die together', function() {
    var roll = new RollDie();

    expect(roll.total).to.equal(10);
  });
});