const express = require("express");
const app = express()
const connection = require('./database/database');
const Register = require('./database/Register');
const cors = require('cors');
const alert = require('alert');

app.use(express.json({limit: '50mb'}));
app.use(cors());

//Sequelize connection
connection
    .authenticate().then(() => {
        console.log("Database connection successfull")
    })
    .catch((errorMsg) =>{
        console.log(errorMsg);
    });

app.post('/register', (req,res) =>{
    const {email,password,username,phone,confirmPassword} = req.body;
    Register.findOne({where:{email:email}}).then( user => {
        if(user == undefined && password == confirmPassword){
            Register.create({
                email,
                password,
                username,
                phone
            }).then((data) =>{
                res.json(data);
            });
        }else{
            alert("Este e-mail já foi cadastrado ou as senhas não coincidem");
        }
    })
});
//Servidor
app.listen(3001, () => {
    console.log("Server running on port 3001");
});