import React , { useState}from 'react'
import '../Usuarios/css/login.css'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import imagen from '../home/img/formLogin.jpg'


export default function Login() {

  
  
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const data = new FormData();
      data.append("Correo", email);
      data.append("Contrasena", password);
      // Validar campos antes de enviar el formulario
      if (validateEmail(email) && validatePassword(password) ) {
        fetch(
          "https://apicasadelmarisco.azurewebsites.net/" +
            "api/CasaDelMarisco/Login?Correo=" +
            email+
            "&Contrasena="+
            password,
          {
            method: "POST",
            body: data,
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if(result === 'Error en tus credenciales'){
              setPasswordError('Contraseña incorrecta');
            }else if(result === 'Error en las credenciales'){
              setEmailError('Error en las credenciales');

            }else if(result === 'Contraseña correcta'){
              window.location.href='/'
            }
          
          }
        );
       
      } else {
        console.log('Formulario no válido');
      }
    };

     const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email == ('')){
        setEmailError ('No puede estar vacio')
      }else if (emailRegex.test(email)) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Correo electrónico no válido');
        return false;
      }
    };
  
    const validatePassword = (password) => {
      // Agrega tus criterios de validación de contraseña aquí
      if(password == ('')){
        setPasswordError ('No puede estar vacio')
      }else if (password.length >= 8) {
        setPasswordError('');
        return true;
      } else {
        setPasswordError('La contraseña debe tener al menos 8 caracteres');
        return false;
      }
    };
   
  return (
    
    <div className="registro-form-containerLogin">
      <section>
        <img src='https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj' alt='as' />
        </section>
    <div className="registro-image-containerLogin">
      <img src={imagen} alt="Registro" className="registro-imageLogin" />
    </div>
    <div className="registro-formLogin">
      <p className='loginTitulo'>Login</p>
      <label className='loginText'>Inicia sesión para obtener nuevos permisos y opciones dentro del sitio web</label>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre" className='loginLabel'>Correo electrónico :</label>
        <input
           type='email'
           id="email"
           name="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           onBlur={() => validateEmail(email)}
           className={emailError ? 'input-error' : ''}
           required
        />
        {emailError && <p className="error-message">{emailError}</p>}
        <label htmlFor="email" className='loginLabel'>Contraseña :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
          className={passwordError ? 'input-error' : ''}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}

        <Link to='/recuperar' className='forget'>¿Olvidaste tu password?</Link>
       
        <label className='recuerdame'>
          <input
            type="checkbox"
           className='cuadro'
          />
          Recuérdame
        </label>
           <Link to='/registrar' className='singText'>No tienes cuenta?  Registrase</Link>
      
        <button  className='btn btn-warning text2' type="submit">Entrar</button><br/>
     
      </form>
    </div>
  </div>
    
  )
}
