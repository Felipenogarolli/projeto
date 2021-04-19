import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import logoinicio from './img/logo-inicio.jpeg';



function App() {
  return (
    <div id="page-landing">
        <div className="sec01">
          <img className="logoinicio" src={logoinicio} alt="logo" />

          <main className="text01">
            <p>Adicionar um resump sobre o que é a safe city</p>
          </main>
        </div>
    </div>
  );
}

export default App;
