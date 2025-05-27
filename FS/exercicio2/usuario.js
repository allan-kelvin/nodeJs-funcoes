const fs = require('fs');
const prompt = require('prompt-sync')();

function main() {
    const nome =  prompt('Digite o nome: ');
    const idade =  prompt('Digite a idade: ');
    const email =  prompt('Digite o email: ');
    const senha =  prompt('Digite a senha: ');

    const usuario = {
        nome,
        idade,
        email,
        senha
    };

    fs.writeFile('usuario.json', JSON.stringify(usuario), (err) =>{

    if (err) {
     console.error('Erro ao escrever o arquivo:', err);
    }else{
        console.log('Arquivo usuario.json criado com sucesso!');
        }
    });
}

main();
