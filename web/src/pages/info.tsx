import React from 'react';
import '../styles/global.css';
import '../styles/info.css';
import { Container, Row, Col } from "react-bootstrap";
import iconFacebook from '../img/icon-facebook.png';
import iconInstagram from '../img/icon-instagram.png';
import iconLinkedin from '../img/icon-linkedin.png';
import imagemInfo from '../img/img-info.png';
import Rodape from './rodape';

function Info() {
    return (
        <div id="page-infos">
            <div className="sec01">
                <Container>
                    <Row className="mb-5 pb-5">
                        <Col lg={6}>
                            <img className="image d-none d-lg-block" alt="logo" src={imagemInfo}/>
                            <h3 className="titulo">Fale com a gente</h3>
                            <p className="number">(41) 99999-9999</p>
                            <h5 className="names">
                                Felipe Nogarolli
                            </h5>
                            <h5 className="names">
                                Guilherme Borges
                            </h5>
                            <h5 className="names">
                                Heloise Bonato
                            </h5>
                            <h5 className="names">
                                Vinicius Joay
                            </h5>
                        </Col>
                        <Col lg={6} className="pt-5">
                            <h3 className="sobre-nos pt-5">Sobre nós</h3>
                            <p className="descricao">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it
                                has a more-or-less normal distribution of letters, as opposed
                                to using 'Content here, content here', making it look like
                                readable English. Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default model text, and a
                                search for 'lorem ipsum' will uncover many web sites still in
                                their infancy.
                            </p>
                            <div className="redes d-flex justify-content-end align-items-center px-5">
                                <img className="icon mr-4" src={iconLinkedin} />
                                <img className="icon mr-4" src={iconFacebook} />
                                <img className="icon mr-4" src={iconInstagram} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Rodape/>
            </div>
        </div>
    );
}

export default Info;
