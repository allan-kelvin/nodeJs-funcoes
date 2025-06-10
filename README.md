## Aula 01 NodeJs

* Exercicio 1: Criação de funções
* Exercicio 2: Criação de logica de switch

## Aula 02 Nodejs - Funções WriteFile e ReadFile

- Exercicio 1: Criação de função readFile
- Exercicio 2: Criação de função writeFile e convertendo para JSON
- Exercicio 3: Recebe um array misturado de numeros e string, o metodo main pega o array e separa eles de numeros e letras. Depois cria os diretorios e os 2 arquivos separados. 1 só com numeros e outro só com letras.

## Aula 03 NodeJs - Métodos HTTP

- Exercicio 1: leia as informações do arquivo usuarios.json e mostre como mensagem da resposta para o servidor que será executado na porta 3500


## Aula NodeJs utilizando Sequelize

- 1) Crie as configurações para a conexão com o banco.

Utilize o sequelize com o dialect mysql, as configurações devem ser:
host: localhost
user: root
password: suaSenha
database: biblioteca
Após criar as configurações, exporte o módulo para utilizar nos arquivos de definição dos modelos.


- 2) Crie os 2 modelos do banco de dados: Autores e Categorias (Possuem apenas chaves primárias). Lembre-se de exportar o módulo para utilizar nos arquivos de definição dos outros modelos com os quais se relacionam 


- 3) Crie o modelo Livros. Este modelo se relaciona com os modelos Autores e Categorias.
Se atente a configurações de relacionamento entre os modelos. 

```bash
npm install 
```

```bash
npm init -y 
```

```bash
npm install prompt-sync

```
### Sequelize

```bash
npm i sequelize mysql2

```