import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import logoinicio from './img/logo-inicio.jpeg';
import nuvem1 from './img/nuvem1.jpeg';
import imagemInicio from './img/mapa-inicio.jpeg';


function App() {
  return (
    <div id="page-landing">
      <div className="sec01">
        <Container>
          <Row>
            <Col lg={5} className="mt-4">
              <img className="logoinicio" src={logoinicio} alt="logo" />

              <main className="text01 mt-5">
                <p>Adicionar um resump sobre o que é a safe city</p>
              </main>
              <Row>
                <Col lg={6}>
                  <a className="btn-login" href="#">Entrar</a>
                </Col>
                <Col lg={6}>
                  <a className="btn-register" href="#">Cadastre-se</a>
                </Col>
              </Row>
              <img className="img-canto" src={nuvem1} />
            </Col>
            <Col lg={7}>
              <img className="imagem-inicio" src={imagemInicio} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
