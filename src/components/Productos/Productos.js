import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Button,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import imageen from '../home/img/platillo.jpg';
import imageen2 from '../home/img/hamburguesa.jpg';
import imageen3 from '../home/img/cotel.jpg';
import imageen5 from '../home/img/pescado.jpeg';
import imageen6 from '../home/img/brocheta.jpg';
import imageen7 from '../home/img/bebida.jpg';

import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useState } from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1. Detalles adicionales sobre el producto.',
    precio: '$19.99',
    disponibles: 10,
    categoria: 'bebida',
    imagen: imageen,
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2. Detalles adicionales sobre el producto.',
    precio: '$29.99',
    disponibles: 5,
    categoria: 'bebida',
    imagen: imageen3,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    categoria: 'platillo',
    imagen: imageen2,
  },
  {
    id: 4,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    categoria: 'platillo',
    imagen: imageen5,
  },
  {
    id: 5,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    categoria: 'platillo',
    imagen: imageen6,
  },{
    id: 6,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    categoria: 'postres',
    imagen: imageen7,
  },
  {
    id: 7,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    categoria: 'postres',
    disponibles: 15,
    imagen: imageen2,
  },
  {
    id: 8,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    categoria: 'postres',
    imagen: imageen5,
  },
  {
    id: 9,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen6,
  },
  {
    id: 10,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen2,
  },
  {
    id: 11,
    nombre: 'bebida',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$30',
    disponibles: 15,
    imagen: imageen5,
  },
  {
    id: 12,
    nombre: 'bebida',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$50.99',
    disponibles: 15,
    imagen: imageen6,
  },
  
  
];
  const Productos2 = () => {

 
  const agregarAlCarrito = (producto) => {
    // Lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${producto.nombre}`);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);
  const [categoria, setCategoria] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('');
  const [orderOption, setOrderOption] = useState('');


  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };


  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filtrar productos basados en la búsqueda
    const filtered = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(query) &&
        (maxPrice === '' || parseFloat(producto.precio.substr(1)) <= parseFloat(maxPrice)) 
    );

    setFilteredProductos(filtered);
    setShowAllProducts(false);
  };

  const handleMaxPriceChange = (event) => {
    const price = event.target.value;
    setMaxPrice(price);
  };
  const applyFilters = () => {
    // Filtrar productos basados en la búsqueda, la categoría y el precio máximo
    const filtered = productos
      .filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(searchQuery) &&
          (selectedCategory === '' || producto.categoria === selectedCategory) &&
          (maxPrice === '' || parseFloat(producto.precio.substr(1)) <= parseFloat(maxPrice))
      )
      .sort((a, b) => {
        // Aplicar ordenamiento basado en la opción seleccionada
        if (orderOption === 'asc') {
          return parseFloat(a.precio.substr(1)) - parseFloat(b.precio.substr(1));
        } else if (orderOption === 'desc') {
          return parseFloat(b.precio.substr(1)) - parseFloat(a.precio.substr(1));
        } else {
          return 0; // No aplicar ordenamiento si la opción no está seleccionada
        }
      });
  
    setFilteredProductos(filtered);
    setShowAllProducts(false);
  };



  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '20px' }}>
    <Container style={{ display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Container >
      <TextField
        label="Buscar productos"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', width: '100%', maxWidth: '200px', fontWeight: 'lighter', }}
      />
      </Container>
      <Container style={{ display: 'flex', flexDirection:'row', justifyContent:'right'}}>
      <FormControlLabel
    control={
      <Checkbox
        checked={orderOption === 'asc'}
        onChange={() => setOrderOption('asc')}
        name="orderAsc"
        color="primary"
      />
    }
    label="Menor a Mayor"
  />
  <FormControlLabel
    control={
      <Checkbox
        checked={orderOption === 'desc'}
        onChange={() => setOrderOption('desc')}
        name="orderDesc"
        color="primary"
      
      />
    }
   
    label="Mayor a Menor"
  />
     <TextField
          select
          label="Categoría"
          variant="outlined"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ marginBottom: '20px', minWidth: '150px' }}
        >
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="bebida">Bebidas</MenuItem>
          <MenuItem value="platillo">Platillo</MenuItem>
          {/* Agrega más opciones de categoría según tus necesidades */}
      </TextField>
      <Button style={{marginBottom:'10px'}}  variant="text" onClick={applyFilters}>
        Filtrar
      </Button>
      
      </Container>
    </Container>
    <Grid container spacing={3}>
      {(showAllProducts ? productos : filteredProductos).map((producto) => (
        <Grid item key={producto.id} xs={20} sm={6} md={4}>
          <Card>
            <CardActionArea style={{ display: 'flex', flexDirection: 'column', background: 'transparent' }}>
              <CardMedia component="img" alt={producto.nombre} height="160" image={producto.imagen} />
              <CardContent style={{ flex: '1' }}>
                <Typography variant="h6" component="div">
                  {producto.nombre}
                  <Button
                    size="small"
                    onClick={() => console.log(`Agregado al carrito: ${producto.nombre}`)}
                    style={{ marginLeft: '37%', margin: '10px', backgroundColor: 'orange', color: 'white' }}
                  >
                    <LocalGroceryStoreOutlinedIcon /> Carrito
                  </Button>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.descripcion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Precio: {producto.precio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Disponibles: {producto.disponibles}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default Productos2;
