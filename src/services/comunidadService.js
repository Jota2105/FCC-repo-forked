import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/fcc';

const getCantones = () => {
  return axios.get(`${API_URL}/canton`);
};

const getParroquias = () => {
  return axios.get(`${API_URL}/parroquia`);
};

const getProvincias = () => {
  return axios.get(`${API_URL}/provincia`);
};

const getPersonas = () => {
  return axios.get(`${API_URL}/persona`);
};

const getTiposPersona = () => {
  return axios.get(`${API_URL}/tipo_persona`);
};

const getInteracciones = () => {
  return axios.get(`${API_URL}/interaccion`);
};

const createPersona = (persona) => {
  return axios.post(`${API_URL}/persona`, persona);
};

const createInteraccion = (interaccion) => {
  return axios.post(`${API_URL}/interaccion`, interaccion);
};

export default {
  getCantones,
  getParroquias,
  getProvincias,
  getPersonas,
  getTiposPersona,
  getInteracciones,
  createPersona,
  createInteraccion,
};
