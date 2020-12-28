// Cloning File
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is runnig ${PORT}`);
})

app.get('/test', (req, res, next) => {
    res.send('Cloning File');
})


/*  Create readable stream to file in current directory (__dirname) named 'node.txt'  
Use utf8 encoding  Read the data in 16-kilobyte chunks */ 
var readable = fs.createReadStream(__dirname + '/tmp/text.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
// create writable stream 
var writable = fs.createWriteStream(__dirname + '/tmp/nodeCopy.txt');
// Write each chunk of data to the writable stream 
readable.on('data', function(chunk) {    writable.write(chunk);
//GoalKicker.com – Node.js Notes for Professionals 51
});