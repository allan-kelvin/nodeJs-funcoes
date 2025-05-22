const prompt = require('prompt-sync')();

function minhaFuncao(text) {
    let textoConvertido = text.toUpperCase();
    switch (textoConvertido) {
        case 'ALUNO':
            let resAluno = prompt('Qual a sua turma?');
            console.log(`Você esta na turma ${resAluno}`);
            break;
        case 'PROFESSOR':
            let resProfessor = prompt('Qual a sua Disciplina?');
            console.log(`Você é Professor da Disciplica de ${resProfessor}`);
            break;
        case 'FUNCIONARIO':
            let resFuncionario = prompt('Qual a sua Função?');
            console.log(`Sua função é ${resFuncionario}`);
            break;
        default:
            console.log('Nenhuma das Opções foram encontradas');
            break;

    }
}

module.exports = { minhaFuncao };