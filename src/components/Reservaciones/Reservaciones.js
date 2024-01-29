import React, { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

const Reservaciones = () => {
  const [reservacion, setReservacion] = useState({
    nombre: '',
    email: '',
    telefono: '',
    personas: '',
    fecha: '',
    hora: '',
  });

  const handleChange = (event) => {
    setReservacion({ ...reservacion, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Logica de envio de ifn
    console.log('Reservación enviada:', reservacion);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '10px' ,marginBottom:'30px'}}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Hacer una Reservación
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={reservacion.nombre}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  value={reservacion.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  value={reservacion.telefono}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Número de Personas"
                  name="personas"
                  type="number"
                  value={reservacion.personas}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Fecha"
                  name="fecha"
                  type="date"
                  value={reservacion.fecha}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Hora"
                  name="hora"
                  type="time"
                  value={reservacion.hora}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Tipo de Mesa</InputLabel>
                  <Select
                    name="tipoMesa"
                    value={reservacion.tipoMesa}
                    onChange={handleChange}
                  >
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="vip">Familiar</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" style={{ backgroundColor:' #ff8c00'}}>
                  Confirmar Reservación
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Reservaciones;
