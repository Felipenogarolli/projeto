import React from 'react';
import '../styles/global.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/logo2.jpeg';

function register() {
    return (
        <div id="page-register">
            <div className="sec01">
                <Container>
                    <Row>
                        <Col xs={12} className="mt-4">
                            <img className="logo" alt="logo" src={imagemLogin} />
                            <h3 className="titulo">Criar uma Conta</h3>
                            <form>
                                <input className="form" type="text" name="Nome Completo" />
                                <input className="form" type="email" name="Email" />
                                <input className="form" type="phone" name="Telefone" />
                                <input className="form" type="password" name="Senha" />
                                <input className="form" type="password" name="Confirmar senha" />
                            </form>
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="btn-criar">Criar</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default register;