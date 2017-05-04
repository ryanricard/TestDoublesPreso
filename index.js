const argv = require('yargs').argv;
const Roll = require('./lib/Roll');

const roll = new Roll(argv.numberOfDice);

console.log(`Dice : ${roll.dice.join(', ')}`);
console.log(`Total: ${roll.total}`);
