import React from 'react';

const ImagensInicioFim = ({ imagemInicio, imagemFim }) => (
  <>
    <img src={imagemInicio} className="Imagem-inicio" alt="Imagem Início" />
    <img src={imagemFim} className="Imagem-fim" alt="Imagem Fim" />
  </>
);

export default ImagensInicioFim;
