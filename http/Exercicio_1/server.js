
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let objeto = fs.readFileSync('usuario.json', 'utf-8', (erro, conteudo)=>{
        if (erro) {
            console.log('deu ruim');
            return (erro.mensagem);
        } else {
            return (JSON.stringify(conteudo));   
        }
    });
    res.write(JSON.stringify(objeto));
    res.end();
    
}).listen(3500, ()=>{
    console.log('Servidor rodando na porta 3500');
});
