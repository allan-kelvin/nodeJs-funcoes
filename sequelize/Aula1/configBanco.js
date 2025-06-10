const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('banco_vendasl06', 'root', '',
    {
    host: 'localhost',
    dialect: 'mysql'
    }
)

//Conexão ao banco

sequelize.authenticate() //método assincrono
.then(()=> console.log('Conectado ao banco MYSQL'))
.catch((error)=> console.log(error));


const Venda = sequelize.define('venda', 
    {
        idVenda:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fkNf:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fkItem:{
            type: DataTypes.INTEGER,
            allowNull: false

        },
        fkProduto:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantidade:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        desconto:{
            type: DataTypes.DOUBLE,
            allowNull: false
        }

    }
);

const Item = sequelize.define('item', 
    {
        idItem:{
            type: DataTypes,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nomeItem:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        valorUnit:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },

    }
);

    
module.exports = sequelize;
