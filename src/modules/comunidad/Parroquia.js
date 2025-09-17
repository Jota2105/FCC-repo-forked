import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const Parroquia = () => {
  const [parroquias, setParroquias] = useState([]);

  useEffect(() => {
    comunidadService.getParroquias().then((response) => {
      setParroquias(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Parroquias</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cantón</th>
          </tr>
        </thead>
        <tbody>
          {parroquias.map((parroquia) => (
            <tr key={parroquia.id}>
              <td>{parroquia.id}</td>
              <td>{parroquia.nombre}</td>
              <td>{parroquia.id_canton}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Parroquia;
