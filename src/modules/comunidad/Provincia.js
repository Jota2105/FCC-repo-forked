import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const Provincia = () => {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    comunidadService.getProvincias().then((response) => {
      setProvincias(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Provincias</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {provincias.map((provincia) => (
            <tr key={provincia.id}>
              <td>{provincia.id}</td>
              <td>{provincia.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Provincia;
