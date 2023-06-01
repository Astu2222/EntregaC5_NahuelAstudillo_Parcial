import React from 'react';
import './Card.css';

const Card = ({ inputUno, inputDos, teamImage }) => {
  return (
    <div className="cardQatar">
      <h3>Hola {inputUno}!!!</h3>
      <h3>
        Excelente elección, para nosotros {inputDos} también fue el mejor
        equipo!!!
      </h3>
      {teamImage && <img src={teamImage} alt={inputDos} />}
    </div>
  );
};

export default Card;
