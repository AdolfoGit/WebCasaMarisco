import React, { useState } from 'react';
import './css/registro.css'
import imagen from '../home/img/login.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const navigate = useNavigate();
  const [nombre,setNombre]= useState('')
  const [ApellidoP,setApellidoP]= useState('')
  const [ApellidoM,setApellidoM]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  
  ///mensajes de error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordError2, setPasswordError2] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [apellidoMError, setApellidoMError] = useState('');
  const [apellidoPError, setApellidoPError] = useState('');
  const [fechaError, setFechaError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
    
        const data = new FormData();
        data.append("Nombre", nombre);
        data.append("ApellidoPaterno", ApellidoP);
        data.append("ApellidoMaterno", ApellidoM);
        data.append("Correo", email);
        data.append("Telefono", telefono);
        data.append("Contrasena", password);
        data.append("FechaNacimiento", fechaNac);
        
        const formData = new FormData();
        formData.append("Correo", email);
        
      
      // Validar campos antes de enviar el formulario
      if (validateEmail(email)==true && validatePassword(password)==true && validatePassword2(password2) && validateApellidoM(ApellidoM)==true && validateApellidoP(ApellidoP)==true && validateNombre(nombre) && validateTelefono(telefono)&& validateFecha(fechaNac) ) {
    
       
        fetch(
          "https://apicasadelmarisco.azurewebsites.net/" +
            "api/CasaDelMarisco/VerificarCorreo?Correo=" +
            email,
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if(result=='Correo Existe'){
              setEmailError('Invalido, correo existente');
            }else{
              fetch(
                "https://apicasadelmarisco.azurewebsites.net/" +
                  "api/CasaDelMarisco/AgregarUsuarios?Nombre=" +
                  nombre +
                  "&ApellidoPaterno=" +
                  ApellidoP +
                  "&ApellidoMaterno=" +
                  ApellidoM +
                  "&Correo=" +
                  email +
                  "&Telefono=" +
                  telefono +
                  "&Contrasena=" +
                  password + 
                  "&FechaNacimiento"
                  + fechaNac,
                {
                  method: "POST",
                  body: data,
                }
              )
                .then((res) => res.json())
                .then((result) => {
                  window.location.href='/login'
                }); 
            }
          });  
      } else {
        navigate('/500');
      }
    };

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    //validaciones jsjsjjs
    const validateNombre =(nombre)=>{
      if(nombre==''){
       setNombreError('No puede estar vacio')
       return false;

      }else{
        if(nombre.length<2){
          setNombreError('minimo de 2 caracteres')
          return false;
        }else{
          const nombreRegex = /^[a-zA-Z\s]+$/;
          if (nombreRegex.test(nombre)){
            setNombreError('');
            return true;
          }
          else{
            setNombreError('No puede contener numeros');
            return false;
          }
        }
      }
      
    }
    const validateApellidoP =(ApellidoP)=>{
   
      if(ApellidoP==''){
        setApellidoPError('No puede estar vacio')
        return false;
       }else{
         if(ApellidoP.length<5){
          setApellidoPError('minimo de 5 caracteres')
          return false;
         }else{
          const nombreRegex2 = /^[a-zA-ZÜü\s]+$/;
           if (nombreRegex2.test(ApellidoP)){
            setApellidoPError('');
             return true;
           }
           else{
            setApellidoPError('No puede contener numeros');
             return false;
           }
         }
      }
    }
    const validateApellidoM =(ApellidoM)=>{

      if(ApellidoM==''){
        setApellidoMError('No puede estar vacio')
        return false;
       }else{
         if(ApellidoM.length<5){
          setApellidoMError('minimo de 5 caracteres')
          return false;
         }else{
          const nombreRegex3 = /^[a-zA-ZÜü\s]+$/;
           if (nombreRegex3.test(ApellidoM)){
            setApellidoMError('');
             return true;
           }
           else{
            setApellidoMError('No puede contener numeros');
             return false;
           }
         }
      }
    }

    const validateEmail = (email) => {
     if(email==''){
      setEmailError('No puede estar vacio')
      return false;
     }else{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Correo electrónico no válido');
        return false;
      }
     }
    };

    function checkPasswordStrength(password, minChar, level) {
      const lowcase = /[a-z]/.test(password);
      const uppcase = /[A-Z]/.test(password);
      const numbers = /\d/.test(password);
      const special = /[^a-zA-Z\d]/.test(password);
    
      let passed = true;
      switch (level) {
        case 5:
          passed = passed && special;
        case 4:
          passed = passed && uppcase;
        case 3:
          passed = passed && numbers;
        case 2:
          passed = passed && lowcase;
        case 1:
          passed = passed && (lowcase || uppcase || numbers);
        case 0:
          passed = passed && password.length >= minChar;
          break;
        default:
          passed = false;
      }
      return passed;
    }
    
  
    const validatePassword = (password) => {
      if(password==''){
        setPasswordError('no puede estar vacio')
        return false;
      }else{
        if(password.length<8){
          setPasswordError('minimo de 8 caracteres');
          return false;
        }else{ 
          const passwordValidate= checkPasswordStrength(password,8,5);
          if(passwordValidate){
            setPasswordError('')
            return true;
          }else{
            setPasswordError('Debe tener almenos una mayuscula, minuscula, numero y caracter especial')
            return false;

          }
        }
      }
    };
    const validatePassword2=(password2)=>{
      if(password2==password){
        setPasswordError2('')
        return true;  

      }else{
        setPasswordError2('no son iguales las contraseñas')
        return false;
      }
    };
   
    const validateTelefono = (telefono)=>{
      const telefonoRegex=/^[1-9]\d*$/;
     
      if (telefono === '') {
        setTelefonoError('No puede estar vacío');
        return false;
      } else if (!telefonoRegex.test(telefono)) {
        setTelefonoError('Teléfono no válido');
        return false;
      } else if (/^(\d)\1+$/.test(telefono)) {
        // Verifica si todos los dígitos son iguales (coherentes)
        setTelefonoError('Teléfono no coherente');
        return false;
      } else {
        setTelefonoError('');
        return true;
      }

    };

    const validateFecha=(fechaNac)=>{
      const fechaLimiteInferior = new Date('2002-01-01');
      const fechaActual = new Date();

      const fechaIngresada = new Date(fechaNac);
      if(fechaNac==('')){
        setFechaError('no puede estar vacio')
        return false;
      }else if (fechaIngresada < fechaLimiteInferior || fechaIngresada > fechaActual){
        setFechaError('La fecha no es valida');
        return false;
      }else{
        setFechaError('')
        return true;

      }
    };

    return (
      <div className="registro-form-containerRegistro">
    <div className="registro-image-containerRegistro">
      <img src={imagen} alt="Registro" className="registro-imageRegistro" />
    </div>
    <div className="registro-formRegistro">
     <p className='loginTitulo'>Sing Up</p>
     <label className='loginText'>Bienvenido a la Casa del Marisco ingresa los siguientes datos para poder crear tu cuenta.</label>
      <form onSubmit={handleSubmit} className='formulario'>
       <div>
        <label htmlFor="nombre" className='RegistroLabel'>Nombre* :</label>
          <input
            id="nombre"
            name="nombre"
            value={nombre}
            type='text'
            onChange={(e) => setNombre(e.target.value)}
            onBlur={() => validateNombre(nombre)}
            className={nombreError ? 'input-error' : ''}
            required
          />
           {nombreError && <p className="error-message">{nombreError}</p>}
       </div>
       
       <div>
          <label htmlFor="apaellidoP" className='RegistroLabel'>Apellido Paterno :</label>
          <input
            required
            id="apellidoP"
            name="apellidoP"
            type='text'
            value={ApellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
            onBlur={() => validateApellidoP(ApellidoP)}
            className={apellidoPError ? 'input-error' : ''}
     
          />
          {apellidoPError && <p className="error-message">{apellidoPError}</p>}
        </div>

        <div>
          <label htmlFor="apellidoM" className='RegistroLabel'>Apellido Materno :</label>
          <input
            required
            id="apellidoM"
            name="apellidoM"
            type='text'
            value={ApellidoM}
            onChange={(e) => setApellidoM(e.target.value)}
            onBlur={() => validateApellidoM(ApellidoM)}
            className={apellidoMError ? 'input-error' : ''}
          />
          {apellidoMError && <p className="error-message">{apellidoMError}</p>}
        </div>

       <div>
          <label htmlFor="email" className='RegistroLabel'>Correo* :</label>
          <input
            required
            id="email"
            name="email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail(email)}
            className={emailError ? 'input-error' : ''}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div>
          <label htmlFor="password" className='RegistroLabel'>Contraseña :</label>
          <input
            type="password"
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
            className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div>
          <label htmlFor="password2" className='RegistroLabel'>Repetir contraseña :</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            required
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={() => validatePassword2(password2)}
            className={passwordError2 ? 'input-error' : ''}
          />
          {passwordError2 && <p className="error-message">{passwordError2}</p>}
        </div>
        <div>
          <label htmlFor="telefono" className='RegistroLabel'>Telefono* :</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={telefono}
            required
            onChange={(e) => setTelefono(e.target.value)}
            onBlur={() => validateTelefono(telefono)}
            className={telefonoError ? 'input-error' : ''}
          />
          {telefonoError && <p className="error-message">{telefonoError}</p>}
        </div>
        <div >
          <label htmlFor="fecha" className='RegistroLabel'>Fecha de nacimiento :</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            required
            value={fechaNac}
            onChange={(e) => setFechaNac(e.target.value)}
            onBlur={() => validateFecha(fechaNac)}
            className={fechaError ? 'input-error' : ''}
          />
          {fechaError && <p className="error-message">{fechaError}</p>}
        </div>
       
        <label to='/terminos'className='recuerdame'>
          <input
            type="checkbox"
           className='cuadro'
          />
         <Link to='/terminos'> Acepta los terminos y condiciones</Link>
        </label>
        <Link to='/politicas' className='singText'>Politicas de privacidad</Link>
      
        <button  className='btn btn-warning text2' type="submit">Registro</button><br/>
        
      </form>
    </div>
  </div>
    );
  };
export default Registro;