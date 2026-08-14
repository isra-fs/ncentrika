// Header.js
import React from 'react';
import Navbar, { HEADER_SCROLL_OFFSET } from './Navbar';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import { AppoinmentButton, PhoneButton } from './Button';
/** Alineado con --bp-nav / @media (max-width: 1000px) en public/css */
const NAV_BREAKPOINT = 1000;

const Header = () =>{
    const [width] = useWindowWidthAndHeight();
    return(
        <header>
            <div className="header-inner">
                <Link to="Home" 
                      smooth={true}
                      offset={HEADER_SCROLL_OFFSET}
                      className="logo nav-link">
                      <img src='resources/images/logo.svg' alt='Ncentrika' className='ncentrika-logo'/>
                </Link>
                { width > NAV_BREAKPOINT ?
                <><Navbar navClass="nav-big"
                linkClassName="nav-big-link"/>
                <div className='navbar-button'> 
                    <PhoneButton  href="tel:+6646706182" number={'(664)6706182'}/>
                    <AppoinmentButton text={'Agenda hoy'} extraClass={'header-button'}/>
                </div>
                
                </>
                
                :
                <SmallScreensNavbar navClass="nav-small"
                                    linkClassName = "nav-small-link"
                />
                } 
            </div>
        </header>
    )
}

export default Header;