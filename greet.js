const express = require('express');

module.exports = function( options = {}) {
    const router = express.Router();
    router.get('/greet', (req, res, next) => {
        console.log('Api/V1');
        res.send(options.greeting);
    });
    return router;
};