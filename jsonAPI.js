const express = require('express');
const cors = require('cors');
const { static } = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// For all routes
// Middleware function is a function, which has 
// access to req, res and next fucntions
app.use(cors());

//Handeling Errors
app.use( (req, res, next) => {
    const err = new Error('Not Found ');
    err.status = 404;
    next(err);
})

// Handle error, print stacktrace
app.use( (req, res, next) => {
    res.static(err.status || 500);

    res.render('error', {
        message: err.message,
        error: err
    });
})



//app.use(express.static('public'));
//app.use('/static', express.static('public'));

// Multi folders as static
app.use(express.static('public'));
app.use(express.static('images'));



app.get('', (req, res) => {
    const info = {
        'string_value': 'Stack Over Flow',
        'number_value': 2020
    }
//    res.json(info);
//    res.status(200).json(info);
res.send(JSON.stringify({
    'string_value': 'Stack Over Flow',
    'number_value': 2020
}))
})

app.listen(PORT, () => {
    console.log(`Server Running: ${PORT}`);
})