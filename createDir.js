const e = require('express');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/createdir', (req, res, next) => {
    createDir('./newDir');
    res.send('Dir was created');
})

app.listen(PORT, () => {
    console.log(`Server is running: ${PORT}`)
})

function createDir(dirPath) {
    try {
        fs.mkdirSync(dirPath);
    } 
    catch (error) {
        if (error.code != 'EEXIST') 
            throw error;
    }
};