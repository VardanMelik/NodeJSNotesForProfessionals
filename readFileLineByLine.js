const express = require('express');
const fs = require('fs');
const readLine = require('readline');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running: ${PORT}`);
});

/*
var file = 'path.to.file'; 
var rl = readline.createInterface({    
    input: fs.createReadStream(file),    
    output: process.stdout,    
    terminal: false 
});
rl.on('line', (line) => {
    console.log(line) 
    // print the content of the line on each linebreak 
});
*/

let filePath = 
'D:/Node JS Book/NodeJSNotesForProfessionals/tmp/text.txt';

let rl = readLine.createInterface({
    input:    fs.createReadStream(filePath),
    output:   process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});