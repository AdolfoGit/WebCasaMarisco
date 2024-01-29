import React from 'react'

import imageen from './home/img/platillo.jpg';
import imageen2 from './home/img/hamburguesa.jpg';
import imageen3 from './home/img/bebida.jpg';
import imageen4 from './home/img/ceviche.jpg';
import imageen5 from './home/img/pescado.jpeg';
import imageen6 from './home/img/brocheta.jpg';
import imageen7 from './home/img/hamburguesa.jpg';
import imagen8 from './home/img/brocheta.jpg';
import imagen9 from './home/img/plato2.jpg';
import imagen10 from './home/img/plato3.jpg';
function Pinterest() {
  return (
    <div className='principal'>
        <p>Otros platillos</p>
       <h1>bvejvnek</h1>
      <div className='container-Pinterest'> 
      <div className="producto">
          <img src={imageen} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imagen9} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imageen2} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imageen5} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imagen10} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imageen3} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
        <div className="producto">
          <img src={imagen8} alt="Platillo 1" />
          <div className="info">
            <h3>Platillo 1</h3>
            <p>Categoría: Comida</p>
            <button>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pinterest
