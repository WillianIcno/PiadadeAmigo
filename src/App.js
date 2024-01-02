// App.js
import React, { useState } from 'react';
import './App.css';
import './botao.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ImagensInicioFim from './imagemInicioFim';
import PaginaPrincipal from './PaginaPrincipal/PaginaPrincipal';
import PaginaDestino from './PaginaDestino/PaginaDestino';

import meuGif from './gif/meugif.gif';
import imagemInicio from './img/kurj1.jpeg';
import imagemFim from './img/kurj 4.jpeg';

function App() {
  const [mostrarImagem, setMostrarImagem] = useState(false);

  const estiloImagem = {
    animation: 'none',
  };

  const mostrarImagemFunction = () => {
    // Lógica para mostrar a imagem ao clicar no botão
    setMostrarImagem(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ImagensInicioFim imagemInicio={imagemInicio} imagemFim={imagemFim} />
          <h1>Felipe Kurjata</h1>
          <img src={meuGif} className="App-logo" alt="logo" style={estiloImagem} />
          <h2>O Apóstolo do mal</h2>
          <p>
            <code>Por que Roma lutou tanto para esconder a verdade sobre a descendência dos Kurjatas</code>
            <h3> Descubra clicando abaixo</h3>
          </p>
          {/* Botão para mostrar a imagem */}
          <button className="botao" type="button" onClick={mostrarImagemFunction}>
            Clique aqui
          </button>

          {/* Se a imagem deve ser mostrada, navegue para a página de destino */}
          {mostrarImagem && <Navigate to="/pagina-destino" />}
        </header>

        {/* Configuração das rotas */}
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/pagina-destino" element={<PaginaDestino />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
