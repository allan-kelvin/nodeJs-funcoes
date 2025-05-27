const fs = require('fs');
const caminho = 'ola.txt';
const codificacao = 'utf-8'

//método

fs.readFile(caminho, codificacao, (err, conteudo)=>{
    if (err) {
        console.log(`Erro aconteceu ${err.message}`);
    }else{
        console.log(conteudo);
    }
});