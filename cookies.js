const express = require('express');
const cookiesParser = require('cookie-parser');


const app = express();

// Cookies Parser Middleware
app.use(cookiesParser());

// Setting Cookies
app.get('/setcookie', (req, res, next) => {
    // setting cookies
    res.cookie('username', 'Vahagn Ayvazyan', { maxAge: 900000, httpOnly: true })
    return res.send('Cookies has been set');
});

app.get('/getcookie', (req, res, next) => {
    let username = req.cookies['username'];
    if (username) {
        return res.send(username);
    }
    /*var username = req.cookies['username'];    
    if (username) {        return res.send(username);            }
    return res.send('No cookie found');*/
})

app.listen(3000, () => {
    console.log(`Server working`);
})
