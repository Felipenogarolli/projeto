import React from 'react';
import '../styles/global.css';
import '../styles/landing.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import logoinicio from '../img/logo-inicio.jpeg';
import nuvem1 from '../img/nuvem1.png';
import imagemInicio from '../img/mapa.png';
import nuvem2 from '../img/nuvem2.png';
import iconFacebook from '../img/icon-facebook.png';
import iconInstagram from '../img/icon-instagram.png';
import iconLinkedin from '../img/icon-linkedin.png';

function App() {
  return (
    <div id="page-landing">
      <div className="sec01">
        <Container>
          <Row className="mb-5 pb-5">
            <Col lg={5} className="mt-4">
              <img className="logoinicio" src={logoinicio} alt="logo" />

              <main className="text01 mt-5">
                <p>Adicionar um resump sobre o que é a safe city</p>
              </main>
              <Row>
                <Col lg={6}>
                  <Button className="btn-login" href="login">Entrar</Button>
                </Col>
                <Col lg={6}>
                  <Button className="btn-register" href="#">Cadastre-se</Button>
                </Col>
              </Row>
            </Col>
            <Col lg={7}>
              <img alt="img-inicio" className="imagem-inicio img-fluid" src={imagemInicio} />
            </Col>
          </Row>
          <Row>
            <Col lg={5}></Col>
            <Col lg={7} className="mt-lg-5">
              <div className="redes d-flex justify-content-end align-items-center px-5">
                <img className="icon mr-4" src={iconLinkedin} />
                <img className="icon mr-4" src={iconFacebook} />
                <img className="icon mr-4" src={iconInstagram} />
              </div>
            </Col>
          </Row>
          <img alt="img-nuvem2" className="img-nuvem-right img-fluid" src={nuvem2} />
          <img alt="img-canto" className="img-canto img-fluid" src={nuvem1} />
        </Container>
      </div>
    </div>
  );
}

export default App;
