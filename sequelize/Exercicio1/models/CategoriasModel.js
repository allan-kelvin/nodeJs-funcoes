const sequelize = require('../configBanco');
const {DataTypes} = require('sequelize');

const Categoria = sequelize.define('categoria', {
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});