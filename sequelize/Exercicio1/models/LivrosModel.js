const sequelize = require('../configBanco');
const {DataTypes} = require('sequelize');

const Livros = sequelize.define('livros', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'autores', // Nome da tabela referenciada
            key: 'id_autor'
        }
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categoria', // Nome da tabela referenciada
            key: 'id_categoria'
        }
    }
});

// Um autor pode ter vários livros
Autores.hasMany(Livros, { foreignKey: 'autor_id' });

// Uma categoria pode ter vários livros
Categoria.hasMany(Livros, { foreignKey: 'categoria_id' });