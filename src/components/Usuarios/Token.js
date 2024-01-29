import React  ,{useState}from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import imagen from '../home/img/login.jpg';

export default function Token() {
  const location = useLocation();
  const correo = new URLSearchParams(location.search).get('correo');
  const navigate = useNavigate();
  const [token,setToken]=useState('')
  const [erroToken,setErroeToken]=useState('')
 


  const data = new FormData();
  data.append('Correo', correo);
  data.append('Token', token);

  const handleSubmit = (event) => {
    event.preventDefault();


      fetch(
        'https://apicasadelmarisco.azurewebsites.net/' +
          'api/CasaDelMarisco/VerificarToken?Correo=' +
          correo+"&Token="+Token,
        {
          method: 'POST',
          body: data,
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result === 'Credenciales validas') {
            navigate(`/actualizar?correo=${correo}`);
          }else{
            setErroeToken('Tonken invalido')
          }
        });
  };

  return (
    <div className="registro-form-containerLogin">
      <div className="registro-image-containerLogin">
        <img src={imagen} alt="Registro" className="registro-imageLogin" />
      </div>

      <div className="registro-formLogin">
        <p className="loginTitulo">Recuperación</p>
        <label className="loginText">
          Ingrese el token que se le envio al correo
        </label>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="loginLabel">
            Token :
          </label>
          <input
            type='text'
            name="token"
            required
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
         {erroToken && <p className="error-message">{erroToken}</p>}
          <br />

          <button className="btn btn-warning text2" type="submit">
            Enviar
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
