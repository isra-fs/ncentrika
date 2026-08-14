//Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

/** Header 70px + un poco de aire para que el título no quede debajo */
export const HEADER_SCROLL_OFFSET = -90;

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
        route:'Innovation',
        title:'Innovación en tecnología'
    },
    {
        route:'About',
        title:'¿Quiénes somos?'
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
              offset={HEADER_SCROLL_OFFSET}
              className={linkClassName}
              onClick={onClick}
              key={navigation.route}>
                
            {navigation.title}
        </Link>
      )}
  </nav>
)
export default Navbar;