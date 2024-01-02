import React from 'react';
import img from './kurjata.png';

const PaginaDestino = () => {
  // Lógica para mostrar a imagem ao clicar no botão
  return (
    <div>
      <h1>POR QUE ELE É UM RAPOSÃO SADUCEU </h1>
      <img
        src={img}  // Use a variável img aqui
        alt="kurjata.png"
        style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }}
      />
    </div>
  );
};

export default PaginaDestino;
