// Error Handeling in Express
const express = require('express');
const app = express();

// Get /name/john
app.get('/names/:name', (req, res, next) => {
    if ( req.params.name == 'john') {
        return res.send('Valid name');
    } else {
        next( new Error('Not valid name'));
    }
})

// Error handle
app.use( (err, req, res, next) => {
    console.log(err.stake) // Not valid name
    return res.status(500).send('Internal Server Occured');
})

app.listen(3000, () => {
    console.log('Server working');
})