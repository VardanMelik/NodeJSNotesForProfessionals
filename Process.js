const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running\n');
    //console.log(process.env);
    //console.log(process.argv0);
    
    /*process.argv.forEach( (val, index) => {
        console.log(`${index}: ${val}`);
    })*/
    /*process.channel.foreach( (val, index) => {
        console.log(`${index}: ${val}`);
    })*/

    //console.log(process.channel);
    //console.log(process.argv[0]);
    
});

app.get('/', (req, res) => {
    //res.send(process.channel);
    //res.send(process.env);
    //res.send(process.argv0);
    //res.send(process.arch);
    //res.send(process.channel);
    //res.send(process.channel.ref());
    //res.send(process.config);
    //res.send(process.connected);
    //res.send(process.cwd());
    //res.send(process.debugPort);
    //res.send(process.execArgv);
    //res.send(process.execPath);

    // Does not work async issue
    /*let sum = 0;
    for (i=2; process.argv.length; i++) {
        sum += Number(process.argv[i]);
    }
    console.log('Sum is: ' + sum);
    res.send(sum);*/

})