const Sequelize = require("sequelize");
const conncetion = require("./database");

const register = connection.define('user',{
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    telefone:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});