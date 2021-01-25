
const yargs = require('yargs');	
const fs = require('fs')
const chalk = require('chalk');	
const notes = require('./notes');	

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
        notes.addNotes(argv.title,argv.body);
    }	
});	

yargs.command({
    'command':'remove',
    'description':'remove notes command',	
    builder:{		
        title:{	
            descript:'Note Title',	
            demandOption:'required',	
            type:'string'	
        }	
    },	
    handler:function(argv){	
        notes.deleteNotes(argv.title);
    }	
});	

yargs.parse(); 