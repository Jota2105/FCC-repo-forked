import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Drawer from "../../components/Drawer";
import comunidadService from '../../services/comunidadService';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Personas = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [personas, setPersonas] = useState([]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    comunidadService.getPersonas().then((response) => {
      setPersonas(response.data);
    });
  }, []);

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
          Personas de la Comunidad
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 4 }}
          onClick={() => navigate("/fcc-comunidad/personas/nueva")}
        >
          Agregar Persona
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Interacciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {personas.map((persona) => (
                <TableRow key={persona.id}>
                  <TableCell>{persona.id}</TableCell>
                  <TableCell>{persona.nombre}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        navigate(`/fcc-comunidad/personas/${persona.id}/interacciones`)
                      }
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Personas;
