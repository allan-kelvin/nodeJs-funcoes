const prompt = require('prompt-sync')();
const fs = require('fs');
const caminho = 'palavras.txt';
const codificacao = 'utf-8'

//método

fs.readFile(caminho, codificacao, (err, conteudo) => {
    if (conteudo.length < 500) {
        console.log(`Warning !! Arquivo informado fora dos padrões, Precisa ter mais de 500 caracteres`);
    } else if (conteudo.length > 500) {
        console.log('Conteudo do texto dentro dos Padrões de 500 caracteres.');
        let res = prompt('Deseja Imprimir Conteudo do texto? S/N: ');

        let validacao = false;
        
        while (validacao === false) {
            if (res === 'S') {
                validacao = true;
                console.log(conteudo);
            } else if (res === 'N') {
                validacao = true;
                console.log('Programa Encerrado');
            } else {
                console.log('Opção não encontrada!');
                res = '';
            }
        }
    } else {
        console.log(`Erro aconteceu ${err.message}`);
    }
});