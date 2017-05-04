const expect = require('chai').expect;
const Roll = require('../../lib/Roll');

describe('Nondeterministic Roll', () => {
  it('should default to two dice', () => {
    const roll = new Roll();
    expect(roll.dice.length).to.equal(2);
  });

  it('should provide the ability to roll more than two dice', () => {
    const roll = new Roll(5);

    expect(roll.dice.length).to.equal(5);
  });

  it('should handle invalid numeric input', () => {
    const roll = new Roll(-2);

    expect(roll.dice.length).to.equal(0);
    expect(roll.total).to.equal(0);
  });

  it('should correctly compute dice total', () => {
    const roll = new Roll();

    expect(roll.total).to.equal(10);
  });
});
