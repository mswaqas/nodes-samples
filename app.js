const additions = require('./notes');
const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

let sum = additions(15, -2);

console.log(chalk.inverse.underline('Total Sum of calculation is ') + error(sum));