import React from 'react';
import '../styles/global.css';
import '../styles/register.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import imagemLogin from '../img/logo2.jpeg';

function register() {
    return (
        <div id="page-register">
            <div className="sec01">
                <Container>
                    <Row>
                        <Col xs={12} className="mt-4 d-flex flex-column align-items-center">
                            <img className="logo" alt="logo" src={imagemLogin} />
                            <h3 className="titulo">Criar uma Conta</h3>
                            <form className="d-flex flex-column">
                                <input className="form my-2" type="text" placeholder="Nome Completo" />
                                <input className="form my-2" type="email" placeholder="Email" />
                                <input className="form my-2" type="phone" placeholder="Telefone" />
                                <input className="form my-2" type="password" placeholder="Senha" />
                                <input className="form my-2" type="password" placeholder="Confirmar senha" />
                            </form>
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="btn-criar mt-4 mb-4">Criar</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}

export default register;