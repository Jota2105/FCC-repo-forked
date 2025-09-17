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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
import Drawer from "../../components/Drawer";
import comunidadService from '../../services/comunidadService';

const Interacciones = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [interacciones, setInteracciones] = useState([]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    comunidadService.getInteracciones().then((response) => {
      setInteracciones(response.data);
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
          Interacciones de la Comunidad
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mb: 4 }}
          onClick={() => navigate("/fcc-comunidad/interacciones/nueva")}
        >
          Agregar Interacción
        </Button>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {interacciones.map((interaccion) => (
                <TableRow key={interaccion.id}>
                  <TableCell>{interaccion.id}</TableCell>
                  <TableCell>{interaccion.nombre}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Interacciones;
