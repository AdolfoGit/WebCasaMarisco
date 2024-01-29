import React from 'react'
import './css/nosotros.css'
import esau from '../home/img/platillo.jpg'
export default function Nosotros() {
  return (
    <section className="clientes_contenedor">
    <h2 className="titulo">¿QUIENES SOMOS?<i className="fa-solid fa-user-check"></i></h2>
    <div className="contenido-textos">
        <p className="somo">Somos alumnos de la UTHH, un pequeño equipo de desarrolladores cuyo proposito es hacer un sitio web para la empresa "Restaurante bar "La Casa Del Marisco"", el equipo lo integran solamente 2 personas la cual uno de nosotros tiene un proposito como el lider</p>   
    </div>
    <div className="cards">
        <div className="card">
            <img  src={esau}/>
            <div className="contenido-texto-card">
                <h4>ADOLFO ANGEL HERNANDEZ MANUEL</h4>
                <p>Somos alumnos de la UTHH, un pequeño equipo de desarrolladores cuyo proposito es hacer un sitio web para la empresa "Restaurante bar "La Casa Del Marisco"", el equipo lo integran solamente 2 personas la cual uno de nosotros tiene un proposito como el lider</p>
            </div>
        </div>
        <div className="card">
            <img  src={esau}/>
            <div className="contenido-texto-card">
                <h4>JAFET ESAÚ GUZMAN MARTINEZ</h4>
                <p>Somos alumnos de la UTHH, un pequeño equipo de desarrolladores cuyo proposito es hacer un sitio web para la empresa "Restaurante bar "La Casa Del Marisco"", el equipo lo integran solamente 2 personas la cual uno de nosotros tiene un proposito como el lider </p>
            </div>
        </div>
      
    </div>
</section>
  )
}
