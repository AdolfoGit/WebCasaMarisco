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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

const Reservaciones = () => {
  const [reservacion, setReservacion] = useState({
    nombre: '',
    email: '',
    telefono: '',
    personas: '',
    fecha: '',
    hora: '',
    tipoMesa: '',
    servicio:'',
  });

  const [reservacionesList, setReservacionesList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [openReservacionDialog, setOpenReservacionDialog] = useState(false);
  const [selectedReservacion, setSelectedReservacion] = useState(null);

  const handleChange = (event) => {
    setReservacion({ ...reservacion, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logica de envío de información
    console.log('Reservación enviada:', reservacion);

    // Agregar la reservación a la lista
    setReservacionesList([...reservacionesList, reservacion]);

    // Cerrar la ventana emergente de confirmación
    setOpenDialog(false);
  };

  const handleUpdate = () => {
    // Logica de actualización de la reservación
    console.log('Reservación actualizada:', selectedReservacion);

    // Cerrar la ventana emergente de actualización
    setOpenUpdateDialog(false);
  };

  const handleCancel = () => {
    // Logica de cancelación de la reservación
    console.log('Reservación cancelada:', selectedReservacion);

    // Filtrar la lista para excluir la reservación cancelada
    setReservacionesList(reservacionesList.filter((r) => r !== selectedReservacion));

    // Cerrar la ventana emergente de cancelación
    setOpenCancelDialog(false);
  };

  const handleCloseDialogs = () => {
    setOpenDialog(false);
    setOpenUpdateDialog(false);
    setOpenCancelDialog(false);
    setOpenReservacionDialog(false);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '10px', marginBottom: '30px' }}>
      <Card>
        <CardContent>
        <Grid container justifyContent="flex-end" alignItems="center">
            <Typography variant="h6" gutterBottom style={{ marginRight:'30px' }}> 
              Hacer una Reservación
            </Typography>
            {/* Botón para abrir la ventana emergente del formulario */}
            <Button
              variant="contained"
              style={{ backgroundColor: '#ff8c00', marginBottom: '20px' }}
              onClick={() => setOpenReservacionDialog(true)}
            >
              Añadir Reservación
            </Button>
          </Grid>

          {/* Formulario de reservación */}
          <Dialog open={openReservacionDialog} onClose={() => setOpenReservacionDialog(false)}>
            <DialogTitle>Hacer una Reservación</DialogTitle>
            <DialogContent>
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
                <FormControl fullWidth >
                  <InputLabel>Tipo de Mesa</InputLabel>
                  <Select
                    name="Numero de mesa"
                    value={reservacion.tipoMesa}
                    onChange={handleChange}
                  >
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="vip">Familiar</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth >
                  <InputLabel>Tipo de servicio</InputLabel>
                  <Select
                    name="Tipo de servicio"
                    value={reservacion.servicio}
                    onChange={handleChange}
                  >
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="especial">Especial</MenuItem>
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
            </DialogContent>
          </Dialog>

          <Dialog open={openDialog} onClose={handleCloseDialogs}>
        <DialogTitle>¡Reservación Exitosa!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Tu reservación ha sido confirmada con éxito.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>

          {/* Mostrar la lista de reservaciones realizadas */}
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Reservaciones Realizadas
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre A quien se hizo la reservacion</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Numero de personas</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservacionesList.map((r, index) => (
                  <TableRow key={index}>
                    <TableCell>{r.nombre}</TableCell>
                    <TableCell>{r.fecha}</TableCell>
                    <TableCell>{r.hora}</TableCell>
                    <TableCell>{r.personas}</TableCell>
                    <TableCell>
                      <Button
                     
                        style={{ backgroundColor:' grey',color:'black'}}
                        onClick={() => {
                          setSelectedReservacion(r);
                          setOpenUpdateDialog(true);
                        }}
                      >
                        Actualizar
                      </Button>
                      <Button
                    
                        style={{ backgroundColor:' green',color:'black'}}
                        onClick={() => {
                          setSelectedReservacion(r);
                          setOpenCancelDialog(true);
                        }}
                      >
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

     

      {/* Ventana emergente de actualización */}
      <Dialog open={openUpdateDialog} onClose={() => setOpenUpdateDialog(false)}>
        <DialogTitle>Actualizar Reservación</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Contenido de la ventana de actualización.</Typography>
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
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate} style={{ backgroundColor:' #ff8c00'}}>
            Actualizar
          </Button>
          <Button onClick={() => setOpenUpdateDialog(false)} style={{ backgroundColor:' #ff8c00'}}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Ventana emergente de cancelación */}
      <Dialog open={openCancelDialog} onClose={() => setOpenCancelDialog(false)}>
        <DialogTitle>Cancelar Reservación</DialogTitle>
        <DialogContent>
          <Typography variant="body1">¿Estás seguro de que deseas cancelar la reservación?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary" style={{ backgroundColor:' #ff8c00'}}>
            Sí, Cancelar
          </Button>
          <Button onClick={() => setOpenCancelDialog(false)} >
            No, Volver
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Reservaciones;
