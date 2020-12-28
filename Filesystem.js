const express = require('express');
const fs = require('fs');

const app = express();

/*fs.readFile(
    __dirname + '/tmp/text.txt', 
    { encoding: 'utf8'}, 
    
    (err, content) => {
        if (err) return console.error(err);

    console.log(__dirname + 'File \n' + __filename)
    console.log(content);

})*/

try {
    fs.statSync('path/to/file');
    console.log('file or directory exists');
}
catch(err) {
    if (err.code === 'ENOENT') {
        console.log('does not exists')
    }
}

app.listen(3000, () => {
    console.log('Server is running');
})