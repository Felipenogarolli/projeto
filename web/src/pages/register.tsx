import React from 'react';
import '../styles/global.css';
import '../styles/register.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/logo2.jpeg';
import { useState } from "react";
import Axios from '../Axios.js';
import {useHistory} from "react-router";
import Rodape from './rodape';


function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();

    const addUser = () =>{
        Axios.post('/register', {
            username,
            email,
            phone,
            password,
            confirmPassword,
            admin:false
        }).then(()=> {
            history.push("/login")
        })
    }
    return (
        <div id="page-register">
            <div className="sec01">
                <Container className="cont-register">
                    <Row>
                        <Col xs={12} className="mt-4 d-flex flex-column align-items-center">
                            <img className="logo" alt="logo" src={imagemLogin} />
                            <h3 className="titulo">Criar uma Conta</h3>
                            <form className="d-flex flex-column">
                                <input className="form my-2" type="text" placeholder="Nome Completo" onChange={(event) => {setUsername(event.target.value);}}/>
                                <input className="form my-2" type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value);}}/>
                                <input className="form my-2" type="phone" placeholder="Telefone" onChange={(event) => {setPhone(event.target.value);}} />
                                <input className="form my-2" type="password" placeholder="Senha" onChange={(event) => {setPassword(event.target.value);}}/>
                                <input className="form my-2" type="password" placeholder="Confirmar senha" onChange={(event) => {setConfirmPassword(event.target.value);}}/>
                            </form>
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="btn-criar mt-4 mb-4" onClick={addUser}>Criar</a>
                            </div>
                            <a className="text" href="login">J?? possui uma conta? Clique aqui! </a>
                        </Col>
                    </Row>
                </Container>
                <Rodape/>
            </div>
        </div>
    );
}

export default Register;