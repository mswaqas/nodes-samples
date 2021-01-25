
const fs = require('fs')
const chalk = require('chalk');	

const addNotes = function (title, body) {
    const notes = loadNotes()
    
    notes.push({
        'title':title,
        'body':body
    })

    saveNotes(notes);
}

const deleteNotes = function(title){
    const noteslist = loadNotes()
    const notesToKeep = noteslist.filter(function(note){
        return note.title !== title
    })

    if(noteslist.length > notesToKeep.length){
        console.log(chalk.green('note removed'));
    }else{
        console.log(chalk.red('note is not exist'));
    }
    saveNotes(notesToKeep)
}

const saveNotes = function(notes){
    const  JsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',JsonData); 
}

const loadNotes = function(){

    try{
        const fileBuffer = fs.readFileSync('notes.json')
        const fileData = fileBuffer.toString()
        return JSON.parse(fileData) 
    }
    catch(e){
        return [];
    }
}
module.exports = {
    'addNotes': addNotes,
    'deleteNotes':deleteNotes
}