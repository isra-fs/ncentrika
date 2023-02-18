//Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({navClass, linkClassName}) =>(
    <NavComponent navClass={navClass}
                  linkClassName = {linkClassName}
    />
);
const navigationInfo = [
    {
        route:'Services',
        title:'Servicios'
    },
    {
        route:'About',
        title:'¿Quiénes somos?'
    },
    {
        route:'Innovation',
        title:'Innovación en tecnología'
    },
    {
        route:'Contact',
        title:'Contacto'
    },
    {
        route:'Appointment',
        title:'Citas'
    },
] 
export const NavComponent = ({onClick, navClass, linkClassName})=>(
  <nav className={navClass}>
      {navigationInfo.map(navigation=>
        <Link to={navigation.route}
              smooth={true}
              className={linkClassName}
              onClick={onClick}
              key={navigation.route}>
                
            {navigation.title}
        </Link>
      )}
  </nav>
)
export default Navbar;