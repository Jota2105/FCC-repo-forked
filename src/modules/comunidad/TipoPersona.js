import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const TipoPersona = () => {
  const [tiposPersona, setTiposPersona] = useState([]);

  useEffect(() => {
    comunidadService.getTiposPersona().then((response) => {
      setTiposPersona(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Tipos de Persona</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {tiposPersona.map((tipoPersona) => (
            <tr key={tipoPersona.id}>
              <td>{tipoPersona.id}</td>
              <td>{tipoPersona.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TipoPersona;
