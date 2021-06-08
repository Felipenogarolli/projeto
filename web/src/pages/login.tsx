import React from 'react';
import '../styles/global.css';
import '../styles/login.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/carro.png';
import logo from '../img/logo-inicio.jpeg';
import { useState } from "react";
import Axios from 'axios';
import {useHistory} from "react-router";


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const authUser = () =>{
        Axios.post('http://localhost:3001/login', {
            email,
            password
        }).then(()=> {
            history.push("/")
        })
    }

    return (
        <div id="page-login">
            <div className="sec01 py-5">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} className="mt-4">
                            <img className="img-login d-none d-lg-flex" src={imagemLogin} alt="logo" />
                        </Col>
                        <Col lg={7} className="box py-5 mx-4 mx-lg-0">
                            <img className="logo img-fluid pt-lg-5" src={logo} />
                            <h4 className="titulo py-3">Login</h4>
                            <form className="d-flex flex-column align-items-center">
                                <input className="form my-3" type="text" name="E-mail" placeholder=" Insira seu e-mail" onChange={(event) => {setEmail(event.target.value);}}/>
                                <input className="form" type="password" name="Senha" placeholder=" Insira sua senha" onChange={(event) => {setPassword(event.target.value);}}/>
                            </form>
                            <div className="d-flex justify-content-center align-items-center pt-4">
                                <a className="btn-entrar" onClick={authUser}>Entrar</a>
                            </div>
                            <a className="text pt-3" href="registrar">Ainda não é registrado? Clique aqui! </a>
                        </Col>
                    </Row>
                   
                </Container>
            </div>
        </div>
    );
}
export default Login;

