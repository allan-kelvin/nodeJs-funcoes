const sequelize = require('../configBanco');
const {DataTypes} = require('sequelize');

const Autores = sequelize.define('autores', {
    id_autor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nacionalidade: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
});