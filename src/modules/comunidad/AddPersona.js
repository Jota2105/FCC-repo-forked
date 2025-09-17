import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Drawer from "../../components/Drawer";
import comunidadService from '../../services/comunidadService';

const AddPersona = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [provincias, setProvincias] = useState([]);
  const [cantones, setCantones] = useState([]);
  const [parroquias, setParroquias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [selectedCanton, setSelectedCanton] = useState("");
  const [selectedParroquia, setSelectedParroquia] = useState("");
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    comunidadService.getProvincias().then((response) => {
      setProvincias(response.data);
    });
  }, []);

  const handleProvinciaChange = (event) => {
    const provinciaId = event.target.value;
    setSelectedProvincia(provinciaId);
    comunidadService.getCantones().then((response) => {
      setCantones(response.data.filter((canton) => canton.id_provincia === provinciaId));
    });
  };

  const handleCantonChange = (event) => {
    const cantonId = event.target.value;
    setSelectedCanton(cantonId);
    comunidadService.getParroquias().then((response) => {
      setParroquias(response.data.filter((parroquia) => parroquia.id_canton === cantonId));
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const persona = {
      nombre,
      id_parroquia: selectedParroquia,
    };
    comunidadService.createPersona(persona).then(() => {
      navigate("/fcc-comunidad/personas");
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavbarAdmin onDrawerToggle={handleDrawerToggle} />
      <Drawer open={drawerOpen} onClose={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          width: { md: `calc(100% - 240px)` },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "primary.main",
          }}
        >
          Agregar Persona
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            sx={{ mb: 2 }}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Provincia</InputLabel>
            <Select
              value={selectedProvincia}
              onChange={handleProvinciaChange}
            >
              {provincias.map((provincia) => (
                <MenuItem key={provincia.id} value={provincia.id}>
                  {provincia.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Cantón</InputLabel>
            <Select
              value={selectedCanton}
              onChange={handleCantonChange}
              disabled={!selectedProvincia}
            >
              {cantones.map((canton) => (
                <MenuItem key={canton.id} value={canton.id}>
                  {canton.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Parroquia</InputLabel>
            <Select
              value={selectedParroquia}
              onChange={(e) => setSelectedParroquia(e.target.value)}
              disabled={!selectedCanton}
            >
              {parroquias.map((parroquia) => (
                <MenuItem key={parroquia.id} value={parroquia.id}>
                  {parroquia.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Guardar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddPersona;
