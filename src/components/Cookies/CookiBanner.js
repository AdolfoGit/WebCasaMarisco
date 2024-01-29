// CookieBanner.js
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './css/cookiBaner.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(Cookies.get('acceptedCookies'));

  const acceptCookies = () => {
    // Cookies.set('acceptedCookies', 'true', { expires: 1 }); 
    // setAcceptedCookies(true);
  };

  const rejectCookies = () => {
    // Cookies.set('acceptedCookies', 'false', { expires: 1 }); 
    // setAcceptedCookies(false);
  };

  if (acceptedCookies) {
    return null; 
  }

  return (
    <div className="cookie-banner">
    <strong><FontAwesomeIcon icon={faCookie} /> Utilizamos Cookies</strong>
      <p>Usamos cookies para mejorar su experiencia de navegación en nuestra web, para mostrarle contenidos personalizados y para analizar el tráfico en nuestra web</p>
      <Link to='/cookies'>Ver políticas de cookies</Link>
      <div className='bt'>
        <button onClick={acceptCookies}>Aceptar</button>
        <button onClick={rejectCookies}>Rechazar</button>
      </div>     
    </div>
  );
};

export default CookieBanner;
