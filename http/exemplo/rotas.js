const http = require('http');
const fs = require('fs');

let pessoa = {
    nome: 'Allan',
    idade: '32',
    cidade: 'Araras',
    estado: 'SP',
    metodo: function () { console.log(`Oi meu Nome é ${this.nome} e tenho ${this.idade} anos`); }
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Home');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(pessoa));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('Página não encontrada');
    }
    res.end();
});

server.listen(5000,() => console.log('Servidor rodando na porta 5000: http://localhost:5000'));

