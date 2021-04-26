import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import logoinicio from './img/logo-inicio.jpeg';
import nuvem1 from './img/nuvem1.png';
import imagemInicio from './img/mapa.png';
import nuvem2 from './img/nuvem2.png';
import iconFacebook from './img/icon-facebook.png';
import iconInstagram from './img/icon-instagram.png';
import iconLinkedin from './img/icon-linkedin.png';

function App() {
  return (
    <div id="page-landing">
      <div className="sec01">
        <Container>
          <Row className="mb-lg-5 pb-5">
            <Col lg={5} className="mt-5">
              <img className="logoinicio" src={logoinicio} alt="logo" />

              <p className="text01 mt-3 mb-lg-5">
                Ajude você também a tornar a sua cidade um local mais seguro
               </p>
               <img alt="img-inicio" className="imagem-inicio img-fluid d-block d-lg-none" src={imagemInicio} />
              <Row className="my-3">
                <Col xs={5} className="p-lg-0">
                  <Button className="btn-login" href="#">Entrar</Button>
                </Col>
                <Col xs={5}>
                  <Button className="btn-register" href="#">Cadastre-se</Button>
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
              <img alt="img-inicio" className="imagem-inicio img-fluid d-none d-lg-block" src={imagemInicio} />
            </Col>
          </Row>
          <Row>
            <Col lg={5}></Col>
            <Col lg={7}>
              <div className="redes pt-5 pt-lg-0 d-flex justify-content-end align-items-center px-lg-5">
                <img className="icon mr-3 mr-lg-4" src={iconLinkedin} />
                <img className="icon mr-3 mr-lg-4" src={iconFacebook} />
                <img className="icon mr-3 mr-lg-4" src={iconInstagram} />
              </div>
            </Col>
          </Row>
          <img alt="img-nuvem2" className="img-nuvem-right img-fluid d-none d-lg-block" src={nuvem2} />
          <img alt="img-canto" className="img-canto img-fluid" src={nuvem1} />
        </Container>
      </div>
    </div>
  );
}

export default App;
