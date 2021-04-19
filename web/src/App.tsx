import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import {Container, Row, Col, Image, Button } from "react-bootstrap";
import logoinicio from './img/logo-inicio.jpeg';



function App() {
  return (
    <div id="page-landing">
      <div className="sec01">
        <Container>
          <Row>
            <Col lg={6} className="">
              <img className="logoinicio" src={logoinicio} alt="logo" />

              <main className="text01">
                <p>Adicionar um resump sobre o que é a safe city</p>
              </main>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
