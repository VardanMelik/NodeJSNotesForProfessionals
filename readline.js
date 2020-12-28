const express = require('express');
const readline = require('readline');
const fs = require('fs');

const app = express();

app.listen(3000, () => {
    console.log('Server running');
})

const filePath = 'D:/Node JS Book/NodeJSNotesForProfessionals/tmp/text.txt';
let lineCount = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    lineCount++;
});

rl.on('close', () => {
    console.log(lineCount);
})