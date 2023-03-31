import React from 'react';
import { AppoinmentButton } from './Button';
import Navbar from './Navbar';
const Footer = () => {
    return (
        <footer id="Footer" className='footer-footer'>
            <div class="ticker-wrap">
                <div class="ticker">
                    <div class="ticker__item"> <img src='resources/images/Logo-Ins.Aetna.svg' alt='Logo-Ins.Aetna' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.Assurant.svg' alt='Logo-Ins.Assurant' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.Cigna.svg' alt='Logo-Ins.Cigna' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.DentaDental.svg' alt='Logo-Ins.DentaDental' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.Metlife.svg' alt='Logo-Ins.Metlife' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.PacifiCare.svg' alt='Logo-Ins.PacifiCare' /></div>
                    <div class="ticker__item"><img src='resources/images/Logo-Ins.DentaDental.svg' alt='Logo-Ins.DentaDental' /></div>
                </div>
            </div>
            <div className='footer-information'>
                <di className="container">
                    <img src='resources/images/logo.svg' alt='Ncentrika' className='ncentrika-logo' />
                    <ul>
                        <li>664 6706182 | 664 7656045</li>
                        <li> <AppoinmentButton text={'Quiero agendar una cita'} extraClass="footer-appoinment-button" /></li>
                    </ul>
                    <ul><Navbar navClass="nav-big" linkClassName="nav-big-link"/>
                    </ul>
                    <ul className='social-networks'>
                        <li>
                            <a href='https://www.facebook.com/DraKarlaBonilla' target={'_blank'} rel="noreferrer">
                                <img src='resources/images/socialmedia-facebook-white.svg' alt='socialmedia-facebook' />
                            </a>Facebook</li>
                        <li> <a href='https://www.instagram.com/dra._karla_bonilla/' target={'_blank'} rel="noreferrer">
                            <img src='resources/images/socialmedia-instagram-white.svg' alt='socialmedia-instagram' />
                        </a>Instagram</li>
                        <li> <a href='https://www.youtube.com/channel/UCIngEV2uWOW0DMgPsCXYrfA'
                            target={'_blank'} rel="noreferrer">
                            <img src='resources/images/socialmedia-youtube-white.svg' alt='socialmedia-youtube' />
                        </a>Youtube</li>
                        <li> <a href='https://www.google.com.mx/maps/place/Dental+Pedi%C3%A1trica%2F+Dra.+Karla+Bonilla/@32.5246159,-117.0153247,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9499106d91f1b:0xa6552d2c22c977ed!8m2!3d32.5246119!4d-117.0131368?hl=es&shorturl=1'
                            target={'_blank'} rel="noreferrer">
                            <img src='resources/images/socialmedia-googlemaps-white.svg'
                                alt='socialmedia-map' /></a>Google Maps</li>
                    </ul>
                </di>
            </div>
            <img src='resources/images/Fondo-Footer.svg' alt='Fondo-Footer'className='background-footer-destock' />
            <img src='resources/images/fondo-footer-phone.svg' alt='Fondo-Footer' className='background-footer-phone' />
        </footer>
    )
}

export default Footer;