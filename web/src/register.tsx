import React from 'react';
import './styles/global.css';
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
    return (
        <div id="page-register">
            <div className="sec01">
                <Container>
                    <Row>
                        <Col lg={5} className="mt-4">
                            
                        </Col>
                        <Col lg={7} className="box">
                            
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
