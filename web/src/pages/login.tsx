import React from 'react';
import '../styles/global.css';
import '../styles/login.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/carro.png';
import logo from '../img/logo-inicio.jpeg';

function login() {
    return (
        <div id="page-login">
            <div className="sec01 py-5">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} className="mt-4">
                            <img className="img-login" src={imagemLogin} alt="logo" />
                        </Col>
                        <Col lg={7} className="box mt-5">
                            <img className="logo img-fluid pt-5" src={logo} />
                            <h4 className="titulo py-3">Login</h4>
                            <form className="d-flex flex-column align-items-center">
                                <input className="form my-3" type="text" name="E-mail" placeholder=" Insira seu e-mail" />
                                <input className="form" type="password" name="Senha" placeholder=" Insira sua senha" />
                            </form>
                            <div className="d-flex justify-content-center align-items-center pt-4">
                                <a className="btn-entrar">Entrar</a>
                            </div>
                            <a className="text pt-3" href="">Ainda não é registrado? Clique aqui! </a>
                            <a className="text pb-5" href="">Esqueceu sua senha? Clique aqui!</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default login;

