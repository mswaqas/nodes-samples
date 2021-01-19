const yargs = require('yargs');
const chalk = require('chalk');
const additions = require('./notes');


yargs.version('1.1.0');

yargs.command({
    'command':'add',
    'description':'Adding notes command',
    builder:{
        body:{
            descript:'Note Body',
            demandOption:'required',
            type:'string'
        },
        title:{
            descript:'Note Title',
            demandOption:'required',
            type:'string'
        }
    },
    handler:function(argv){
        console.log(chalk.green.bold('Title : '+argv.title))
        console.log(chalk.red.bold('Body : '+argv.body))

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

yargs.parse();