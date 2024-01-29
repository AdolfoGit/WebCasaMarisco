import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import platillo from '../home/img/cotel.jpg'
import platillo2 from '../home/img/hamburguesa.jpg'
import platillo3 from '../home/img/bebida.jpg'

import Rating from 'react-rating-stars-component';
import { useState } from 'react'
export default function PlatillosHome() {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        console.log(`Calificación: ${newRating}`);
        // Aquí puedes manejar la lógica para almacenar la calificación en tu aplicación
        setRating(newRating);
    };

  return (
    <>
        <section className='blog services'>
            <div className='container topMarign'>
                <div className='heading'>
                <h1>MEJORES PLATILLOS</h1>
                    <h3>Son los post de facebook de los platillos mas solicitados en nuestro restaurante, son una delicia culinaria</h3>
                </div>
                <div className='contain grid topMarign'>
                    
                    <div className='box'>
                        <div className='img'>
                            <img src={platillo}/>
                        </div>
                        <div className='text'>
                            <div className='seleccion'>
                                <span>$76</span>
                                <Rating
                               count={5}
                               value={5}  // Establecer el valor predeterminado en 5 estrellas
                               onChange={handleRatingChange}
                               size={24}
                               activeColor='#FFD700'  // Amarillo
                               isHalf={false}  // Desactivar medias estrellas
                               edit={false} 
                                />
                            </div>
                            <h2>Hamburguesa de camaron con papas fritas</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img2'>
                            <img src={platillo2}/>
                        </div>
                        <div className='text'>
                             <div className='seleccion'>
                                <span>$97</span>
                                <Rating
                                 count={5}
                                 value={5}  // Establecer el valor predeterminado en 5 estrellas
                                 onChange={handleRatingChange}
                                 size={24}
                                 activeColor='#FFD700'  // Amarillo
                                 isHalf={false}  // Desactivar medias estrellas
                                 edit={false} 
                                />
                            </div>
                            <h2>Cotel de camarones con una salsa especial</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </div>
                      
                    <div className='box'>
                        <div className='img'>
                            <img src={platillo}/>
                        </div>
                        <div className='text'>
                            <div className='seleccion'>
                                <span>$76</span>
                                <Rating
                               count={5}
                               value={5}  // Establecer el valor predeterminado en 5 estrellas
                               onChange={handleRatingChange}
                               size={24}
                               activeColor='#FFD700'  // Amarillo
                               isHalf={false}  // Desactivar medias estrellas
                               edit={false} 
                                />
                            </div>
                            <h2>Hamburguesa de camaron con papas fritas</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </div>
                      
                      
                </div>
            </div>
        </section>
    </>
  )
}
