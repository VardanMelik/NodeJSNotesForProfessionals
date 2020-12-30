const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000;

// Body Parser for parsing req body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

const itemStore = [];

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});

app.get('/item', (req, res) => {
    res.json(itemStore);
});

app.get('/item/:id', (req, res) => {
    res.json(itemStore[req.params.id]);
    console.log(itemStore[req.params.id]);
})

// Post new item
app.post('/item', (req, res) => {
    itemStore.push(req.body);
    res.json(req.body);
});

//PUT edited item in-place of item with specified id 
app.put('/item/:id', function (req, res) {    
    itemStore[req.params.id] = req.body;    
    res.json(req.body); 
});
//DELETE item with specified id 
app.delete('/item/:id', function (req, res) {    
    itemStore.splice(req.params.id, 1);    
    res.json(req.body); 
});
