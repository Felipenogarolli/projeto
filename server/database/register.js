const { BOOLEAN } = require("sequelize");
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
        type:Sequelize.STRING,
        allowNull:false
    },
    admin:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        default:false
    }
});

register.sync({force:false}).then(()=>{

});

module.exports = register;