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
  Checkbox,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Drawer from "../../components/Drawer";
import comunidadService from '../../services/comunidadService';

const AddInteraccion = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [personas, setPersonas] = useState([]);
  const [selectedPersonas, setSelectedPersonas] = useState([]);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    comunidadService.getPersonas().then((response) => {
      setPersonas(response.data);
    });
  }, []);

  const handlePersonaChange = (event) => {
    const { value } = event.target;
    setSelectedPersonas(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const interaccion = {
      nombre,
      personas: selectedPersonas,
    };
    comunidadService.createInteraccion(interaccion).then(() => {
      navigate("/fcc-comunidad/interacciones");
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
          Agregar Interacción
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
            <InputLabel>Personas</InputLabel>
            <Select
              multiple
              value={selectedPersonas}
              onChange={handlePersonaChange}
              renderValue={(selected) => selected.join(', ')}
            >
              {personas.map((persona) => (
                <MenuItem key={persona.id} value={persona.id}>
                  <Checkbox checked={selectedPersonas.indexOf(persona.id) > -1} />
                  <ListItemText primary={persona.nombre} />
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

export default AddInteraccion;
