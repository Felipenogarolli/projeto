const Sequelize = require("sequelize");
const connection = require("./database");

const register = connection.define('user',{
    userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:Sequelize.BIGINT,
        allowNull:false
    }
});

register.sync({force:false}).then(()=>{

});

module.exports = register;