import React, { useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/system';

const useStyles = styled({
  root: {
    marginTop: '20px',
  
  },
});

const Pedidos= () => {
  const classes = useStyles();
  const [pedidos, setPedidos] = useState([
    { id: 1, producto: 'Camarones a la Diabla', tiempoEntrega: '30 minutos', direccion: 'Calle 123, Ciudad' },
    { id: 2, producto: 'Camarones a la Diabla', tiempoEntrega: '30 minutos', direccion: 'Calle 123, Ciudad' },
    // Agrega más pedidos según sea necesario
  ]);
  const [selectedPedido, setSelectedPedido] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleVerDetalle = (pedido) => {
    setSelectedPedido(pedido);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Container className={classes.root}  style={{ marginBottom: '30px' }} >
      <Typography variant="h4" gutterBottom>
        Historial de Pedidos
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID del Pedido</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Tiempo de Entrega</TableCell>
              <TableCell>Dirección de Entrega</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pedidos.map((pedido) => (
              <TableRow key={pedido.id}>
                <TableCell>{pedido.id}</TableCell>
                <TableCell>{pedido.producto}</TableCell>
                <TableCell>{pedido.tiempoEntrega}</TableCell>
                <TableCell>{pedido.direccion}</TableCell>
                <TableCell>
                  <Button  onClick={() => handleVerDetalle(pedido)}>
                    Ver Detalle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Diálogo para mostrar detalles del pedido */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Detalles del Pedido</DialogTitle>
        <DialogContent>
          {selectedPedido && (
            <div>
              <Typography variant="h6">Producto: {selectedPedido.producto}</Typography>
              <Typography variant="body1">Tiempo de Entrega: {selectedPedido.tiempoEntrega}</Typography>
              <Typography variant="body1">Dirección de Entrega: {selectedPedido.direccion}</Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Pedidos;
