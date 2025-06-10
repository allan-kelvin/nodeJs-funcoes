const sequelize = require('../configBanco');
const {DataTypes} = require('sequelize');

const Autores = sequelize.define('../models/AutoresModel.js');
const Categorias = sequelize.define('../models/CategoriasModel.js');

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
Livros.belongsTo(Autores, { foreignKey: 'autor_id' });

// Uma categoria pode ter vários livros
Categorias.hasMany(Livros, { foreignKey: 'categoria_id' });
Livros.belongsTo(Categorias, { foreignKey: 'categoria_id' });