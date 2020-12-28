const express = require('express');
const SupportFunctions = require('./other');
const greetMiddleWare = require('./greet');
const modulesImport = require('./modules');

const app = express();

app.use('./api/v1', greetMiddleWare({ greeting: 'Hello Geeting'})).listen(8080);

// GET method
app.get('/ping', (req, res, next) => {
    res.send('pong');
})

// POST
app.post('/ping', (req, res, next) => {
    res.send('Post Method');
})

// PUT method
app.put('/ping', (req, res, next) => {
    res.send('Put method');
})

// Delete method
app.delete('/ping', (req, res, next) => {
    res.send('Delete method');
})

// Other method
app.route('/path')
    .get( (req, res, next) => { 
        res.send('Path Get');
        SupportFunctions.SupportFunctions();
    })
    .put( (req, res, next) => {
        res.send('Path Put')
    })
    .delete( (req, res, next) => {
        res.send('Path delete')
    });




app.listen(3000, () => {
    console.log('Localhost')
})


modulesImport.Hello('Nodejs');