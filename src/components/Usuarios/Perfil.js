// Perfil.js
import React from 'react';
import { Avatar, Button, Card, CardContent, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Person, Lock, Email, Notifications, LocationOn, Phone, Wc, LocationCityx } from '@mui/icons-material';
import { Component } from 'react';

class Perfil extends Component{
  constructor(props){
    super(props);
    this.state={
      Usuarios:[]
    }
  }
  
  API_URL = "http://localhost:5029/";
  API_URL2 = "https://apicasadelmarisco.azurewebsites.net/";

  componentDidMount(){
    this.recargarUsuarios();
  }
  async recargarUsuarios(){
    fetch(this.API_URL2 + "api/CasaDelMarisco/ListarUsuarios").then(response=>response.json())
    .then(data=>{
      this.setState({Usuarios:data});
    })
  }
  
  async addClick(){
    var Nombre = document.getElementById("Nombre").value;
    var Apellidos = document.getElementById("Apellidos").value;
    const data = new FormData();
    data.append("Nombre",Nombre);
    data.append("Apellidos", Apellidos);

    fetch(this.API_URL2 + "api/CasaDelMarisco/AgregarUsuarios?Nombre="+Nombre+"&Apellidos="+Apellidos,{
      method:"POST",
      body: data
    }).then(res=>res.json())
    .then((result)=>{
      alert(result);
      this.recargarUsuarios();
    })
  }

  async deleteClick(idUsuario){
    fetch(this.API_URL2 + "api/CasaDelMarisco/EliminarUsuarios?idUsuario="+idUsuario,{
      method:"DELETE",
    }).then(res=>res.json())
    .then((result)=>{
      alert(result);
      this.recargarUsuarios();
    })
  }
render = () => {
  
  const{Usuarios} = this.state;

  return (
    
    <Grid container spacing={3} justifyContent="center" marginBottom={5}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
              <Grid item>
                <Avatar alt="Usuario" src="/ruta/a/tu/imagen.jpg" sx={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <input id='Nombre'/>&nbsp;
                <input id='Apellidos'/>&nbsp;
                <button onClick={()=>this.addClick()}>Agregar Usuario</button>
                <Typography variant="h4"> 
                  {Usuarios.map(Usuario=><p><b>Usuario: {Usuario.Nombre}</b>
                  <button onClick={()=>this.deleteClick(Usuario.idUsuario)}>Eliminar Usuario</button>
                </p>  
        )}</Typography>
                <Typography variant="subtitle1">Correo electrónico: diego234_Mart@gamil.com</Typography>
                <Typography variant="body2">
                  Teléfono: +7712763527<br />
                  Sexo: Masculino<br />
                  Ciudad: Huejutal de Reyes Hidalgo
                </Typography>
              </Grid>
            </Grid>
            <Box mt={3}>
              <Typography variant="h6">Opciones</Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Lock />
                  </ListItemIcon>
                  <ListItemText primary="Cambiar Contraseña" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Editar Datos Personales" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText primary="Gestionar Notificaciones" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <LocationOn />
                  </ListItemIcon>
                  <ListItemText primary="Actualizar Ubicación" />
                </ListItem>
              </List>
              <Button variant="contained"  style={{ marginTop: '20px' , backgroundColor:' #ff8c00'}}>
                Editar Perfil
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
}
export default Perfil;