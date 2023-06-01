import React, { useState } from 'react';
import Card from '../Card/Card';
import equiposQatar from '../Equipos';
import './Formulario'

const Formulario = () => {
  const [inputUno, setInputUno] = useState('');
  const [inputDos, setInputDos] = useState('');
  const [error, setError] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(false);
  const [teamImage, setTeamImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    const equipoEncontrado = equiposQatar.find(
      (equipo) => equipo.equipo.toLowerCase() === inputDos.toLowerCase()
    );

    if (equipoEncontrado) {
      setTeamImage(equipoEncontrado.img);
    } else {
      setTeamImage('');
    }

    if (inputUno.length < 3 || inputUno.startsWith(' ') || inputDos.length < 6) {
      setError(true);
    } else {
      setMostrarCard(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Cual es tu nombre?</p>
        <input
          type="text"
          value={inputUno}
          onChange={(e) => setInputUno(e.target.value)}
        />
        <p>Cual fue tu equipo favorito en fases de final de qatar 2022?</p>
        <input
          type="text"
          value={inputDos}
          onChange={(e) => setInputDos(e.target.value)}
        />
        <hr />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>Por favor chequea que la información sea correcta</p>}
      {mostrarCard && (
        <Card inputUno={inputUno} inputDos={inputDos} teamImage={teamImage} />
      )}
    </div>
  );
};

export default Formulario;
