module.exports = (title) => {
    const country = 'Armenia';
    const company = 'Eyemotion';
    const backend = 'Nodejs';
    console.log('Module: ' + title);
};

module.exports = {
    hello: (subject) => {
        console.log('Hello Function' + subject);
    } 
};