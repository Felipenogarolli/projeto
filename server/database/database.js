const { Sequelize } = require("sequelize");

const connection = new Sequelize('db_safecity','root','root',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;