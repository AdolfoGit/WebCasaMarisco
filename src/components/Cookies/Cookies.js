import React from 'react'
import './css/cookies.css'
const Cookies = () => {
    const cookiesData = [
        { nombre: '__utma', tipo: 'De Terceros (Google Analytics)', caducidad: '2 años', finalidad: 'Se usa para distinguir usuarios y sesiones.', clase: 'No Exenta' },
        { nombre: '__utmb', tipo: 'De Terceros (Google Analytics)', caducidad: '30 minutos', finalidad: 'Se usa para determinar nuevas sesiones o visitas.', clase: 'No Exenta' },
        { nombre: '__utmc', tipo: 'De Terceros (Google Analytics)', caducidad: 'Al finalizar la sesión', finalidad: 'Se configura para su uso con Urchin.', clase: 'No Exenta' },
        { nombre: '__utmz', tipo: 'De Terceros (Google Analytics)', caducidad: '6 meses', finalidad: 'Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web.', clase: 'No Exenta' },
      ];
  return (
    <div className="politicas-cookies">
      <h2 className='titulo'>Política de Cookies</h2>
      <p>En esta web se utilizan cookies de terceros y propias para mejorar tu experiencia de navegación, facilitar el intercambio de contenido en redes sociales y obtener estadísticas de usuarios.</p>
      <p>Puedes evitar la descarga de cookies mediante la configuración de tu navegador, evitando que se almacenen en tu dispositivo.</p>
      <p>Como propietario de este sitio web, te informo que no utilizamos información personal de cookies; solo generamos estadísticas generales de visitas que no incluyen datos personales.</p>
      <p>Es crucial que leas esta política de cookies y entiendas que, al continuar navegando, aceptas su uso.</p>
      <h5>Según la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP) - Artículo 17:</h5>
      <p>"Los responsables que hagan uso de tecnologías de rastreo en equipos de las personas usuarias, como cookies y web beacons, deberán informar previamente, de manera clara y detallada, sobre el tratamiento que se pretende dar a los datos personales. Los mecanismos implementados para recabar datos personales deberán permitir a las personas usuarias manifestar su negativa para el tratamiento de sus datos."</p>
      <p><strong>Entidad Responble: </strong>La entidad responsable de la recopilación, procesamiento y uso de tus datos personales es La Casa del Marisco, propiedad de Víctor Hugo Navarrete, ubicada en Calle 20 de noviembre Número 1, Colonia Comaltepec.</p>
      <p><strong>¿Qué son las cookies?</strong> Las cookies son datos que un servidor deposita en el navegador del usuario para recoger información de registro estándar de Internet y del comportamiento de los visitantes en un sitio web. Son archivos de texto que quedan almacenados en el disco duro del ordenador y permiten identificar al usuario en futuras visitas.</p>
      <h5>Cookies necesarias:</h5>
      <p>Las cookies necesarias son esenciales para el funcionamiento básico de nuestro servicio, incluyendo el inicio de sesión y registro a través de Gmail y Facebook. También gestionan sesiones y garantizan la seguridad del sitio. Estas cookies no pueden desactivarse, ya que son fundamentales para funciones clave que permiten la operación fluida de La Casa del Marisco.</p>

      <h5>Cookies de preferencias:</h5>
      <p>Las cookies de preferencias mejoran tu experiencia personalizando aspectos como el idioma preferido y configuraciones regionales. Nos ayudan a recordar tus preferencias, incluyendo detalles de inicio de sesión con Gmail y Facebook, para ofrecerte una visita más personalizada a La Casa del Marisco.</p>
    
      <h5>Cookies estadísticas:</h5>
      <p>Las cookies estadísticas, incluyendo Google Analytics, nos brindan información anónima sobre cómo los visitantes interactúan con nuestro sitio. Estos datos nos permiten realizar análisis para mejorar continuamente La Casa del Marisco y ofrecer un servicio más eficiente y atractivo.</p>

      <h5>Cookies de marketing:</h5>
      <p>Las cookies de marketing se utilizan para personalizar la publicidad que ves en La Casa del Marisco, adaptándola a tus intereses y actividades en nuestro sitio. Estas cookies también pueden incluir detalles de geolocalización y opciones de pago, como PayPal, Mercado Pago y bancos como Santander, BBVA o Banamex. Contribuyen a ofrecerte ofertas más relevantes y experiencias publicitarias personalizadas.</p>
      <h5>Detalles de Cookies:</h5>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Caducidad</th>
            <th>Finalidad</th>
            <th>Clase</th>
          </tr>
        </thead>
        <tbody>
          {cookiesData.map((cookie, index) => (
            <tr key={index}>
              <td>{cookie.nombre}</td>
              <td>{cookie.tipo}</td>
              <td>{cookie.caducidad}</td>
              <td>{cookie.finalidad}</td>
              <td>{cookie.clase}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Para ampliar esta información, consulte las instrucciones y manuales de su navegador:</p>
        <ul>
          <li>Para más información sobre la administración de las cookies en Google: <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer"> Google Chrome</a></li>
          <li>Para más información sobre la administración de las cookies en Internet Explorer: <a href="http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
          <li>Para más información sobre la administración de las cookies en Mozilla Firefox: <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li>Para más información sobre la administración de las cookies en Safari: <a href="http://www.apple.com/es/privacy/use-of-cookies/" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li>Para más información sobre la administración de las cookies en Opera: <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" target="_blank" rel="noopener noreferrer">Opera</a></li>
        </ul>
        <p>Si desea dejar de ser seguido por Google Analytics, visite: <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></p>
        <h5>Más información sobre cookies:</h5>
        <p>Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en el siguiente enlace: <a href="http://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer">Your Online Choices</a></p>
        <p>Protección de datos de Google Analytics: <a href="http://www.google.com/analytics/learn/privacy.html" target="_blank" rel="noopener noreferrer">Google Analytics Privacy</a></p>
        <p>Cómo usa Google Analytics las cookies: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs" target="_blank" rel="noopener noreferrer">Google Analytics Cookie Usage</a></p>

        <h5>Actualizaciones y cambios en la política de privacidad/cookies:</h5>
        <p>Las webs de Víctor Hugo Navarrete pueden modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.</p>
        <p>Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.</p>

        <h5><strong>Notas adicionales:</strong></h5>
        <ol>
          <li>Ni esta web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.</li>
          <li>Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.</li>
          <li>En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.</li>
          <li>En el caso de las cookies de Google Analytics, esta empresa almacena las cookies en servidores ubicados en Estados Unidos y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento del sistema o cuando la ley obligue a tal efecto. Según Google no guarda su dirección IP. Google Inc. es una compañía adherida al Acuerdo de Puerto Seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea.</li>
          <li>Para cualquier duda o consulta acerca de esta política de cookies, no dudes en comunicarte con nosotros a través de la sección de contacto.</li>
        </ol>
    </div>
    
  );
};

export default Cookies;

