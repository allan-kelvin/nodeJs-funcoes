const fs = require('fs');

let listaMisturada = [1, 'abacaxi', 3, 4, 'maçã', 'pêra', 'banana', 5, 6, 7, 8, 9, 10, 11, 'laranja', 'abacate'];

let numeros = listaMisturada.filter(item => typeof item === 'number');
let strings = listaMisturada.filter(item => typeof item === 'string');


fs.mkdir('saida/numeros', { recursive: true }, (err) => {
    if (err) {
        console.log(`Erro ao criar a pasta de números: ${err}`);
        return;
    }

    fs.writeFile('saida/numeros/numeros.txt', numeros.join('\n'), (err) => {
        if (err) {
            console.log(`Erro ao criar o arquivo de números: ${err}`);
            return;
        } else {
            console.log('Arquivo numeros.txt criado com sucesso em saida/numeros/');
        }
    });
});

fs.mkdir('saida/strings', { recursive: true }, (err) => {
    if (err) {
        console.log(`Erro ao criar a pasta de strings: ${err}`);
        return;
    }

    fs.writeFile('saida/strings/strings.txt', strings.join('\n'), (err) => {
        if (err) {
            console.log(`Erro ao criar o arquivo de strings: ${err}`);
            return;
        } else {
            console.log('Arquivo strings.txt criado com sucesso em saida/strings/');
        }
    });
});
