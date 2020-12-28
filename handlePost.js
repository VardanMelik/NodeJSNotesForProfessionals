const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => {
    console.log('Server runing!');
})

// Parsers the body for POST, PUT, DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', (req, res) => {
    res.send('Get Method');
})

app.post('/post', (req, res, next) => {
    console.log(req.body);
    //res.send(req.body);
})