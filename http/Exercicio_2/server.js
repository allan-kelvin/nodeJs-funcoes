const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }else if (req.url === '/usuario') {
        let usuarioJson = fs.readFileSync('usuario.json', 'utf8',(err,data)=>{
            if(err){
                return (err.mensagem);
            }else{
                console.log(dados);
                return (data);
            }
        });
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.parse(usuarioJson));
        res.end();
    }else if(req.url === '/usuario/1'){
        let usuarioJson = fs.readFileSync('usuario.json', 'utf8',(err,data)=>{
            if (err) { 
                res.writeHead(500, { 'Content-Type': 'text/plain'});
                return (err.mensagem);
            }else {
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.write(JSON.stringify(usuarioJson[0]));
                res.end(data);
            }
        });  
    }
});

const port = 3000;
server.listen(port, () => {
    console.log('Servidor rodando na porta 3000');
});