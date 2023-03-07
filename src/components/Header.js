// Header.js
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import { AppoinmentButton, PhoneButton } from './Button';
const Header = () =>{
    // use our custom hook to get the the window size
    const [width, height] = useWindowWidthAndHeight();
    return(
        <header>
            <div className="header-inner">
                <Link to="Home" 
                      smooth={true} 
                      className="logo nav-link">
                      <img src='resources/images/logo.svg' alt='Ncentrika' className='ncentrika-logo'/>
                </Link>
                {/*if the width of the window is bigger than 1000px use <Navebar/>,
                   else user <SmallScreensNavbar/>*/}
                { width > 1000 ?
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