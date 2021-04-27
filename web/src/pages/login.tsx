import React from 'react';
import '../styles/global.css';
import '../styles/login.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/carro-login.jpeg';
import logo from '../img/logo2.jpeg';

function login() {
    return (
        <div id="page-login">
            <div className="sec01">
                <Container>
                    <Row>
                        <Col lg={5} className="mt-4">
                            <img className="img-login" src={imagemLogin} alt="logo" />
                        </Col>
                        <Col lg={7} className="box">
                            <img className="logo img-fluid" src={logo} />
                            <h4 className="titulo">Login</h4>
                            <form>
                                <input className="form" type="text" name="E-mail" />
                                <input className="form" type="text" name="Senha" />
                            </form>
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="btn-entrar">Entrar</a>
                            </div>
                            <a className="text" href="">Crie sua conta. Clique aqui</a>
                            <a className="text" href="">Esqueceu sua senha? Clique aqui</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default login;

