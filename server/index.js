const express = require("express");
const app = express()
const connection = require('./database/database');

//Sequelize connection
connection
    .authenticate().then(() => {
        console.log("Database connection successfull")
    })
    .catch((errorMsg) =>{
        console.log(errorMsg);
    });



//Servidor
app.listen(3001, () => {
    console.log("Server running on port 3001");
});