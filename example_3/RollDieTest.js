var expect = require('chai').expect;
var sinon = require('sinon');
var Die = require('./Die');
var RollDie = require('./RollDie');

describe('RollDie', function() {
  afterEach(function() {
    Die.throw.restore();
  });

  it('should correctly add die together', function() {
    sinon.stub(Die, 'throw');

    Die.throw.onFirstCall().returns(4);
    Die.throw.onSecondCall().returns(6);

    var roll = new RollDie();

    expect(roll.total).to.equal(10);
  });
});