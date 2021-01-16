const yargs = require('yargs');
const chalk = require('chalk');
const additions = require('./notes');


yargs.version('1.1.0');

yargs.command({
    'command':'add',
    'description':'Adding notes command',
    handler:function(){
        console.log('Add notes running')
    }
});

yargs.command({
    'command':'remove',
    'description':'remove notes command',
    handler:function(){
        console.log('Remove notes command running')
    }
});

yargs.command({
    'command':'list',
    'description':'List notes command',
    handler:function(){
        console.log('Listing notes command running')
    }
});

yargs.command({
    'command':'read',
    'description':'Read notes command',
    handler:function(){
        console.log('Read notes command running')
    }
});

console.log(yargs.argv);