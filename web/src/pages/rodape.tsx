import React from 'react';
import '../styles/global.css';
import '../styles/rodape.css';
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import logo from '../img/logo2.jpeg';

function rodape() {
    return (
        <div id="page-home">
            <div className="sec01 py-5">
                <Container>
                    <Row className=" d-flex align-items-center justify-content-between">
                        <Col lg={3}> 
                            <img className="logo img-fluid" src={logo} alt="logo" />
                        </Col>
                        <Col lg={3}>
                            <a href="sobre-nos">
                                <p className="text mb-2">Sobre a Safe City</p>
                            </a>
                            <a href="sobre-nos">
                                <p className="text mb-2">Entre em Contato</p>
                            </a>
                            <a href="sobre-nos">
                                <p className="text mb-2">Siga-nos nas redes</p>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <h3 className="title pt-5 pt-lg-0">Receba notícias sobre novas atualizações</h3>
                            <form className="py-3">
                                <input className="email" type="email" placeholder="Seu e-mail"/>
                            </form>
                            <div>
                                <a className="btn" href="#">Inscrever</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
}
export default rodape;

