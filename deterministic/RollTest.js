var expect = require('chai').expect;
var sinon = require('sinon');
var Die = require('./Die');
var Roll = require('./Roll');

describe('Deterministic Roll', () => {
  afterEach(() => Die.throw.restore && Die.throw.restore());

  it('should default to two dice', () => {
    var roll = new Roll();
    expect(roll.dice.length).to.equal(2);
  });

  it('should provide the ability to roll more than two dice', () => {
    var roll = new Roll(5);

    expect(roll.dice.length).to.equal(5);
  });

  it('should handle invalid numeric input', () => {
    var roll = new Roll(-2);

    expect(roll.dice.length).to.equal(0);
    expect(roll.total).to.equal(0);
  });

  it('should correctly compute dice total', () => {
    sinon.stub(Die, 'throw');

    Die.throw.onFirstCall().returns(4);
    Die.throw.onSecondCall().returns(6);

    var roll = new Roll();

    expect(roll.total).to.equal(10);
  });
});
