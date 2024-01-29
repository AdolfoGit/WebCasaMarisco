import React from 'react';
import './css/foter.css';
import logo from  '../home/img/logo.jpg';
import { Link } from 'react-router-dom';
const Fotter = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',   
    });
  };


  return (
    <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <img src={logo}/>
            </figure>
          </div>
          <div className="box">
              <h2>CONTACTANOS</h2>
              <p>Numero Telefonico </p>
              <p className="num">77232829438</p>
              <p>Correo de la empresa</p>
              <p >lacasadelmarisco_sabor@gmail.com</p>
            </div>
            <div className="box">
              <h2>UBICACIÓN</h2>
              <p>ubicacion</p>
              <p><a href="https://maps.app.goo.gl/Nfp8jejKHGN9WDFf6" target="_blank" className='url'>Calle 20 de Noviembre, número  1 Col. Colmatepec</a></p>
              <Link to='/politicas' onClick={scrollToTop} className='url'>Politicas de privacidad</Link><br/>
              <Link to='/cookies' onClick={scrollToTop} className='url'>Politicas de cookies</Link><br/>
              <Link to='/terminos' className='url'>Terminos y condiciones</Link>
          </div>
          <div className="box">
            <h2>REDES SOCIALES</h2>
            <div className="redsocial">
                <a href="https://www.facebook.com/111266704957120/posts/111268398290284/?substory_index=0" target="_blank" className="fa fa-facebook icon" ></a>
                <a href="https://www.instagram.com/aguasconadolfo" target="_blank" className="fa fa-instagram"></a>
                <a href="https://twitter.com/AfolfoCon?s=20&=TgicjoywwkqRlwD7Nof5vA"  target="_blank" className="fa fa-twitter"></a>
      </div>
          </div>
        </div>
       
    </footer>
  );
};

export default Fotter;
