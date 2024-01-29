import React, { useState } from 'react'
import logo from '../img/logo.jpg';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
//saber donde estoy
import { useLocation } from 'react-router-dom';


export const Header = () => {

    const [sidebar,setSidebar]=useState(false)
    const location = useLocation(); ///obrener mi ubicacion

    window.addEventListener("scroll", function(){
        const header= document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 200 )
    })
    

  return (
    <>
    <header className='header'>
        <div className='container flex'>
            <div className='logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='nav'>
                <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={ () => setSidebar(false)}>
                   <li className={location.pathname === '/' ? 'active' : ''}><Link to='/'>Home</Link></li>
                   <li className={location.pathname === '/pedidos' ? 'active' : ''}><Link to='/pedidos'>Pedidos</Link></li>
                   <li className={location.pathname === '/ayuda' ? 'active' : ''}><Link to='/ayuda'>Ayuda</Link></li>
                   <li className={location.pathname === '/nosotros' ? 'active' : ''}><Link to='/nosotros'>Mision/Vision</Link></li>
                   <li className={location.pathname === '/productos' ? 'active' : ''}><Link to='/productos'>Productos</Link></li>
                   <li className={location.pathname === '/reservaciones' ? 'active' : ''}><Link to='/reservaciones'>Reservaciones</Link></li  >
                   <li className={location.pathname === '/ofertas' ? 'active' : ''}><Link to='/ofertas'>Ofertas</Link></li>
                   <li className={location.pathname === '/login' ? 'active' : ''}><Link to='/login'><button className='btn btn-warning cd'>Login</button></Link></li>
                   <li className='icon'>
                   
                    <Link to='carrito'><LocalGroceryStoreOutlinedIcon className='HeaderIcon'/></Link>
                    <Link to='perfil'><AccountCircleOutlinedIcon className='HeaderIcon'/></Link>
                   </li>
                </ul>
            </div>
            <button className='navbar-items-icon btn' onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <CloseIcon/> : <MenuIcon/>}
            </button>
        </div>
    </header>
    </>
  )
}

export default Header
