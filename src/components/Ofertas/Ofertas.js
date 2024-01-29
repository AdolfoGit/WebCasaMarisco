import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ofertaImagen1 from '../home/img/bebida.jpg';
import ofertaImagen2 from '../home/img/bebida.jpg';
import ofertaImagen3 from '../home/img/bebida.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '200px',  
}));

const Ofertas = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
       <section>
        <img src='https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj' alt='as' />
        </section>
      <Grid container spacing={3}>
        {/* Oferta 1 */}
        <Grid item xs={12} md={4}>
          <StyledPaper>
            <Typography variant="h6">Oferta Especial</Typography>
            <Typography variant="subtitle1">¡Descuento del 20% en todos los platos de mariscos!</Typography>
            <img src={ofertaImagen1} alt="Oferta Especial" style={{ width: '50%', marginBottom: '10px' }} />
          </StyledPaper>
        </Grid>

        {/* Oferta 2 */}
        <Grid item xs={12} md={4}>
          <StyledPaper>
          
            <Typography variant="h6">Promoción del Mes</Typography>
            <Typography variant="subtitle1">¡Obtén una bebida gratis con la compra de cualquier platillo!</Typography>
            <img src={ofertaImagen1} alt="Oferta Especial" style={{ width: '50%', marginBottom: '10px' }} />
          </StyledPaper>
        </Grid>

        {/* Oferta 3 */}
        <Grid item xs={12} md={4}>
          <StyledPaper>

            <Typography variant="h6">Oferta Flash</Typography>
            <Typography variant="subtitle1">¡Solo hoy! Compra un postre y llévate otro gratis.</Typography>
            <img src={ofertaImagen1} alt="Oferta Especial" style={{ width: '50%', marginBottom: '10px' }} />
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Ofertas;
