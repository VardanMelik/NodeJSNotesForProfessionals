const auth = module.exports = {}
//const config = require('../config');
//const request = require('request');

auth.email = (data, callback) => {
    console.log('Email Module');
}

auth.facebook = (data, callback) => {
    console.log('Facebook Module');
}

auth.twitter = (data, callback) => {
    console.log('Twitter Module');
}

auth.slack = (data, callback) => {
    console.log('Slack Module');
}

auth.stack_overflow = (data, callback) => {
    console.log('Stak Overflow Module');
}






Hello = (subject) => {
    console.log('Hello Function: ' + subject);
}

module.exports = {
    Hello: Hello
};

/*module.exports = printHelloWorld = () => {
    console.log('Hello World');
}*/