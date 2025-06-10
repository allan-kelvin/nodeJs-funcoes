const {Sequelize} = require('sequelize');
const {DataTypes} = require('sequelize');

const sequelize = new Sequelize('livraria', 'root', '', 
    {
        host:'localhost',
        dialect:'mysql'
    }
);

//conexão ao banco
sequelize.authenticate() //método assíncrono
.then(() => {
        console.log('Conectado ao banco de dados MySQL')
        sequelize.sync()
        console.log('Tabelas sincronizadas com sucesso')
    }
).catch(() => console.log('Erro ao conectar ao banco de dados'))

module.exports = sequelize;