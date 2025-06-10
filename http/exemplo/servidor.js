const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    //escrever mensagem 

    res.write('Servidor Online');
    res.end();
}).listen(3000);
