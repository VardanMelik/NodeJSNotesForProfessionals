
const http = require('http'); // Loads the http module

http.createServer((request, response) => {
    response.writeHead(200, {        
        'Content-Type': 'text/plain'    
    });
    response.write('Hello, World!\n');
    response.end();
}).listen(1337); // 4. Tells the server what port to be on
