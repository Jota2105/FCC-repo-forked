import React, { useState, useEffect } from 'react';
import comunidadService from '../../services/comunidadService';

const Persona = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    comunidadService.getPersonas().then((response) => {
      setPersonas(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Personas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            {/* Add other properties of persona here */}
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              {/* Add other properties of persona here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Persona;
