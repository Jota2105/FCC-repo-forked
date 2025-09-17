import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const Interaccion = () => {
  const [interacciones, setInteracciones] = useState([]);

  useEffect(() => {
    comunidadService.getInteracciones().then((response) => {
      setInteracciones(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Interacciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {interacciones.map((interaccion) => (
            <tr key={interaccion.id}>
              <td>{interaccion.id}</td>
              <td>{interaccion.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Interaccion;
