import React from 'react';
import '../styles/global.css';
import '../styles/home.css';
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import logo from '../img/logo2.jpeg';

function home() {
    return (
        <div id="page-home">
            <div className="sec01 py-5">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} className="mt-4">
                            <Row>
                                <Col xs={12}>
                                    <img className="img-fluid" src={logo} alt="logo" />
                                </Col>
                                <Col xs={12}>

                                </Col>
                            </Row>
                        </Col>
                        <Col lg={7} className="box mt-5">
                           
                        </Col>
                    </Row>
                    <Row className="rodape">
                        <Col lg={3}>
                            <img className="logo img-fluid" src={logo} alt="logo" />
                        </Col>
                        <Col lg={3}>
                            <a href="">
                                <p className="text">Sobre a Safe City</p>
                            </a>
                            <a href="">
                                <p className="text">Entre em Contato</p>
                            </a>
                            <a href="">
                                <p className="text">Privacidade</p>
                            </a>
                        </Col>
                        <Col lg={6}>
                            <h3 className="title">Receba notícias sobre novas atualizações</h3>
                            <form>
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

export default home;

