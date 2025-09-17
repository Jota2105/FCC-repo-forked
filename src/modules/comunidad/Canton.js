import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const Canton = () => {
  const [cantones, setCantones] = useState([]);

  useEffect(() => {
    comunidadService.getCantones().then((response) => {
      setCantones(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Cantones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Provincia</th>
          </tr>
        </thead>
        <tbody>
          {cantones.map((canton) => (
            <tr key={canton.id}>
              <td>{canton.id}</td>
              <td>{canton.nombre}</td>
              <td>{canton.id_provincia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Canton;
