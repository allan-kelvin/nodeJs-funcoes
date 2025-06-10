import http from "http";
import fs from "fs";


const server = http((req, res) => {
    if(req.method === 'GET' && req.url === '/'){

    }else if(req.method === 'GET' && req.url === '/usuarios'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            let usuariosJSON = fs.readFileSync('usuarios.json', 'utf8');
            res.end(usuariosJSON);

    }else if(req.method === 'POST' && req.url === '/usuarios'){
        

    }
   
});

server.listen(3000);