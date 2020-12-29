const express = require('express');
const cluster = require('cluster');

const numCPUs = require('os').cpus().length;

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running`);
});

app.get('/test', ( req, res) => {
    res.send('Test' + numCPUs);
})

if (cluster.isMaster) {
    console.log('PC working for ' + numCPUs + ' cores');
    for( let i=0; i<numCPUs; i++) {
        //cluster.fork();
    }
}
