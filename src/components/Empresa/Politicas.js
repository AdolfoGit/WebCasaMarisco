import React from 'react'
import {useState} from 'react';
import './css/politicas.css'
const Politicas = () => {
  const [consentimiento, setConsentimiento] = useState({
    GuardarFormasPago: false,
    AdministrarAutenticacion: false,
    ValidarRegistro: false,
    VerificarPago: false,
    ContactarCliente: false,
    PublicidadOfertas: false,
    AccederPedidosAnteriores: false,
  });

  const [datosPersonales, setDatosPersonales] = useState([
    'Nombre',
    'Registro Federal de Contribuyentes (RFC)',
    'Clave única de Registro de Población (CURP)',
    'Lugar de nacimiento',
    'Fecha de nacimiento',
    'Domicilio',
    'Teléfono celular',
    'Correo electrónico',
    'Edad',
    'Fotografía',
    'Cuentas bancarias',
    'Número de tarjetas de crédito',
    'Datos de identificación',
    'Datos de contacto',
    'Datos patrimoniales y/o financieros',
    'Posturas ideológicas',
    'Religión que profesa',
    'Posturas filosóficas',
    'Posturas políticas',
    'Estado de salud físico presente, pasado o futuro',
    'Pertenencia a un pueblo, etnia o región',
  ]);

  
  const handleChangeConsentimiento = (campo) => {
    setConsentimiento((prevConsentimiento) => ({
      ...prevConsentimiento,
      [campo]: !prevConsentimiento[campo],
    }));
  };

  
  return (
    <div className="aviso-privacidad">
      <h2 className='titulo'>Politica de Privacidad</h2>
      <p>
        Víctor Hugo Navarrete, mejor conocido como La Casa Del Marisco, con domicilio en Calle 20 de Noviembre, número 1, colonia Colonia Comaltepec, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes, c.p. 43000, en la entidad de Hidalgo, país México, y portal de internet<a href="https://lacasadelmarisco.com.mx" target="_blank" rel="noopener noreferrer">https://lacasadelmarisco.com.mx</a>, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
      </p>

      <h5>¿Para qué fines utilizaremos sus datos personales?</h5>
      <p>
        De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
      </p>
      <ul>
        <li>Guardar formas de pago</li>
        <li>Administrar datos de autenticación</li>
        <li>Validar datos de registro</li>
        <li>Verificar datos de pago</li>
        <li>Contactar con el cliente</li>
        <li>Publicidad de ofertas y promociones</li>
        <li>Para poder acceder a pedidos anteriores</li>
      </ul>

      <p>En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación:</p>

      <form>
        {Object.entries(consentimiento).map(([campo, valor]) => (
          <div key={campo}>
            <input
              type="checkbox"
              id={campo}
              checked={valor}
              onChange={() => handleChangeConsentimiento(campo)}
            /> 
          . <label htmlFor= {campo}> {campo}</label>
          </div>
        ))}
      </form>

      <p>
        La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
      </p>
      <h5>¿Qué datos personales utilizaremos para estos fines?</h5>
      <div className="dos-columnas">
        <div className="columna">
          <ul>
            {datosPersonales.slice(0, Math.ceil(datosPersonales.length / 2)).map((dato, index) => (
              <li key={index}>{dato}</li>
            ))}
          </ul>
        </div>
        <div className="columna">
          <ul>
            {datosPersonales.slice(Math.ceil(datosPersonales.length / 2)).map((dato, index) => (
              <li key={index}>{dato}</li>
            ))}
          </ul>
        </div>
      </div>
      <p>Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de privacidad utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial protección:</p>
      <h5>Datos Personales Sensibles</h5>
      <ul>
        <li>Posturas ideológicas</li>
        <li>Religión que profesa</li>
        <li>Posturas filosóficas</li>
        <li>Posturas políticas</li>
        <li>Estado de salud físico presente, pasado o futuro</li>
        <li>Pertenencia a un pueblo, etnia o región</li>
      </ul>

      <h5>Compartición de Datos Personales</h5>
      <p>
        Le informamos que sus datos personales son compartidos dentro del país con las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:
      </p>

      <table>
        <thead>
          <tr>
            <th>Destinatario de los Datos Personales</th>
            <th>Finalidad</th>
            <th>Requiere Consentimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics</td>
            <td>Publicidad y mejoramiento del sistema propio</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Inicio de sesión y registro</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Gmail</td>
            <td>Inicio de sesión y registro</td>
            <td>No</td>
          </tr>
          <tr>
            <td>BBVA</td>
            <td>Autenticación de pago</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Santander</td>
            <td>Autenticación de pago</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Paypal</td>
            <td>Autenticación de pago</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Mercado Pago</td>
            <td>Autenticación de pago</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
      
      <br></br>
      <h5>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h5>
      <p>
        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
      </p>
      <p>
        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio:
      </p>
      <p>
        Al correo <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a>
      </p>
      <p>
        Para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, ponemos a su disposición el siguiente medio:
      </p>
      <p>
        Correo electrónico
      </p>
      <p>
        Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:
      </p>
      <p>
        a) Nombre de la persona o departamento de datos personales: Víctor Hugo Navarrete
      </p>
      <p>
        b) Domicilio: Calle 20 de noviembre número 1, colonia Comaltepec, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes, cp. 43000, en la entidad de Hidalgo, país México
      </p>
      <p>
        c) Correo electrónico: <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a>
      </p>
      <p>
        Usted puede revocar su consentimiento para el uso de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.
      </p>
      <p>
        Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:
      </p>
      <p>
        Correo electrónico <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a>
      </p>
      <p>
        Para conocer el procedimiento y requisitos para la revocación del consentimiento, ponemos a su disposición el siguiente medio:
      </p>
      <p>
        <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a>
      </p>

      <table>
        <thead>
          <tr>
            <th>Nombre del listado  </th>
            <th>  Finalidad para las que se aplica </th>
            <th>  Medio para obtener mas información</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Religión</td>
            <td>Saber la religión y detalles de costumbres </td>
            <td>Correo electrónico lacasadelmarisco@gmail.com</td>
          </tr>
          <tr>
            <td>Posición política  </td>
            <td>Qué posición ante la política está sujeto </td>
            <td>Correo electrónico lacasadelmarisco@gmail.com</td>
          </tr>
          <tr>
            <td>Filosofia</td>
            <td>Tipo de pensamiento que profesa</td>
            <td>Correo electrónico lacasadelmarisco@gmail.com</td>
          </tr>
        </tbody>
      </table>

      <p>
        Asimismo, usted se podrá inscribir a los siguientes registros, en caso de que no desee obtener publicidad de nuestra parte:
      </p>
      <ul>
        <li>
          Registro Público para Evitar Publicidad, para mayor información consulte el portal de internet de la PROFECO
        </li>
        <li>
          Registro Público de Usuarios, para mayor información consulte el portal de internet de la CONDUSEF
        </li>
      </ul>

      <h5>Uso de Tecnologías de Rastreo</h5>
      <p>
        Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:
      </p>
      <ul>
        <li>Análisis de datos de consumo</li>
        <li>Autenticación de medio de pago</li>
        <li>Autenticación de usuarios</li>
        <li>Generar facturas</li>
        <li>Generar reportes de pedidos</li>
        <li>Rastreo de pedidos</li>
      </ul>

      <p>
        Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
      </p>
      <ul>
        <li>Identificadores, nombre de usuario y contraseñas de una sesión</li>
        <li>Idioma preferido por el usuario</li>
        <li>Región en la que se encuentra el usuario</li>
        <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
        <li>Publicidad revisada por un usuario</li>
        <li>Datos fiscales</li>
        <li>Medios de pago</li>
        <li>Geolocalización</li>
      </ul>

      <p>Asimismo, le informamos que su información personal será compartida con las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:</p>

      <table className='tabla'> 
        <thead >
          <tr>
            <th className='tabla'>Destinatario de los datos personales  </th>
            <th className='tabla'> Finalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analitycs </td>
            <td>Análisis de consumo</td>     
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Inicio de sesión y registro de usuario</td>
          </tr>
          <tr>
            <td>Bancos</td>
            <td>Autenticación de pagos</td>
          </tr>
          <tr>
            <td>PayPal</td>
            <td>Autenticación de pagos</td>
          </tr>
          <tr>
            <td>Gmail</td>
            <td>Inicio de sesión y registro de usuario</td>
          </tr>
        </tbody>
      </table>

      <p>
        Para conocer la forma en que se pueden deshabilitar estas tecnologías, consulte el siguiente medio:
      </p>
      <p>
        Por peticiones al correo <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a> o a través de la plataforma web se podrán desvincular o desactivar las diferentes cookies y usos de tecnologías de terceros. También se establecerá una guía de cómo actuar o proceder si este que usuario tiene y quiere desactivar dichas tecnologías.
      </p>

      <h5>¿Cómo puede conocer los cambios en este aviso de privacidad?</h5>
      <p>
        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.
      </p>
      <p>
        Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: Por el correo electrónico de <a href="mailto:lacasadelmarisco@gmail.com">lacasadelmarisco@gmail.com</a> y por la página web de La Casa del Marisco dentro del pie de página.
      </p>
      <p>
        El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente:
      </p>
      <ul>
        <li>
          Cuando existan cambios se establecerá una ventana avisando que estas mismas se han actualizado.
        </li>
        <li>
          Se hará notificación por medio del correo electrónico y se establecerá un pequeño apartado con una estrella o círculo indicando que hay algo nuevo.
        </li>
      </ul>

      

    </div>
  );
};

export default Politicas;

