const fs = require('fs');

try {
    fs.appendFileSync('notes.txt', ' My Name is Andrew');
    console.log('The "data to append" was appended to file!');
} catch (err) {
    /* Handle the error */
    console.log(err);
}