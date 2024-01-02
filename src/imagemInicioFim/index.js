// ImagensInicioFim.jsx

import React from 'react';

const ImagensInicioFim = ({ imagemInicio, imagemFim, className }) => (
  <div className={className}>
    <img src={imagemInicio} className="Imagem-inicio" alt="Imagem Início" />
    <img src={imagemFim} className="Imagem-fim" alt="Imagem Fim" />
  </div>
);

export default ImagensInicioFim;
