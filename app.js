const additions = require('./notes');
const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

let sum = additions(10, -2);

console.log(chalk.rgb(123, 45, 67).underline('Total Sum of calculation is ') + success(sum));