const express = require('express');
const app = express();

// each request will pass throught it

/*app.use( (req, res, next) => {
    req.user = 'testuser';
    next();
})

app.get('/', (req, res, next) => {
    const user = req.user;
    console.log(user);
    return res.send(user);
})

app.listen(3000, () => {
    console.log('Server is working');
});*/

app.listen(3000, () => {
    console.log('Server working');
})
/*
app.get('/', (req, res) => {
    res.send('Main root');
})

app.get('/wiki', (req, res) => {
    res.send('Wiki rout');
})
app.use( (req, res) => {
    res.send('404 Error');
})
*/

/*app.get('/api', (req, res, next) => {
    // Both api/foo and api/bar will run this
    lookupMember( (err, member) => {
        if (err) {
            return next(err);
        };
        req.member = member;
        next();
    })
})*/

app.get('path/:id(\\d+)', (req, res, next) => {
    if (req.params.id == 0) //validate param
        return next(new Error('Id is 0'));
    res.send('Id is ' + req.params.id);
})


