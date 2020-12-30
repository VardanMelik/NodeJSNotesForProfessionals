const express = require('express');
const io = require('socket.io')();

// Does not work
//const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('message-from-client-to-server', (msg) => {
        console.log(msg);
    });

    socket.emit('message-from-server-to-client', 'Hello socket io');
})



const app = express();


app.listen(3000, () => {`Server is running`});
