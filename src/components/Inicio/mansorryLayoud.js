import React from 'react';
import Masonry from 'react-masonry-css';
import { styled } from '@mui/system';


import imageen from '../home/img/platillo.jpg';
import imageen2 from '../home/img/hamburguesa.jpg';
import imageen3 from '../home/img/cotel.jpg';
import imageen6 from '../home/img/cotel.jpg';
import imageen4 from '../home/img/ceviche.jpg';
import imageen5 from '../home/img/pescado.jpeg';
import imageen7 from '../home/img/bebida.jpg';
import imagen8 from '../home/img/brocheta.png';


const productos = [
  
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Descripción del producto 2. Detalles adicionales sobre el producto.',
    precio: '$29.99',
    disponibles: 5,
    imagen: imageen7,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen2,
  },

  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen5,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen6,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imageen3,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.99',
    disponibles: 15,
    imagen: imagen8,
  },
  {
    id: 3,
    nombre: 'Producto 3',
    descripcion: 'Descripción del producto 3. Detalles adicionales sobre el producto.',
    precio: '$39.sdfgsdfgs99',
    disponibles: 15,
    imagen: imageen4,
  },
  
  
  
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};



const MansorryLayoud = () => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {productos.map((producto) => (
        <div className='pinteres' >
          <img  className='img'src={producto.imagen}  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
      ))}
    </Masonry>
  );
};

export default MansorryLayoud;
