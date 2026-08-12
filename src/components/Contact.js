import React from 'react';
import { GeneralButton, AppoinmentButton } from './Button'
const WHATSAPP_CONTACT = 'https://api.whatsapp.com/send?phone=6646706182';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.namedItem('name').value.trim();
        const tel = form.elements.namedItem('tel').value.trim();
        const email = form.elements.namedItem('email').value.trim();
        const message = form.elements.namedItem('message').value.trim();
        if (!name || !tel) {
            return;
        }
        const lines = [
            'Hola, quiero contactar desde la web de Ncéntrika.',
            `Nombre: ${name}`,
            `Teléfono: ${tel}`,
            email ? `E-mail: ${email}` : null,
            message ? `Mensaje: ${message}` : null,
        ].filter(Boolean);
        const url = `${WHATSAPP_CONTACT}&text=${encodeURIComponent(lines.join('\n'))}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="Contact" className='section-contact'>
            <div className='container'>
                <h1 className='section-title'>Contáctanos</h1>
                <div className="row justify-content-md-center">

                    <div className="col-md-auto contact-form">
                        <form onSubmit={handleSubmit}>
                            <div><label htmlFor="inputName">Nombre:*</label><input type="text" id="inputName" name="name" required /></div>
                            <div><label htmlFor="inputTel">Télefono:*</label><input type="tel" id="inputTel" name="tel" required /></div>
                            <div><label htmlFor="inputEmail">E-Mail:</label><input type="email" id="inputEmail" name="email" /></div>
                            <div><label htmlFor="inputMessage">Mensaje:</label><textarea id="inputMessage" name="message" rows="2"></textarea></div>
                            <GeneralButton text={'Enviar'} extraClass={'form-generalButton'} type="submit" />
                        </form>
                    </div>
                    <div className="col-md-auto">
                        <div className='information-contact'>
                            <p >Torre Platino Piso 4 Interior 402
                                Blvd. Rodolfo Sanchez Taboada
                                #10488 Zona Urbana Rio
                                C.P. 23010 Tijuana B.C. México</p>
                            <div>
                                <p>Teléfono: 664 6858610 <br />
                                    <strong>Whatsapp:</strong><br />
                                    664 6706182</p>
                                <AppoinmentButton text={'Llamar'} extraClass="contact-appoinment" />
                                <div className='contact-social-network'>

                                    <a href='https://www.facebook.com/DraKarlaBonilla' target={'_blank'} rel="noreferrer">
                                        <img src='resources/images/socialmedia-facebook.svg' alt='socialmedia-facebook' />
                                    </a>
                                    <a href='https://www.instagram.com/dra._karla_bonilla/' target={'_blank'} rel="noreferrer">
                                        <img src='resources/images/socialmedia-instagram.svg' alt='socialmedia-instagram' />
                                    </a>
                                    <a href='https://www.youtube.com/channel/UCIngEV2uWOW0DMgPsCXYrfA'
                                        target={'_blank'} rel="noreferrer">
                                        <img src='resources/images/socialmedia-youtube.svg' alt='socialmedia-youtube' />
                                    </a>
                                    <a href='https://www.google.com.mx/maps/place/Dental+Pedi%C3%A1trica%2F+Dra.+Karla+Bonilla/@32.5246159,-117.0153247,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9499106d91f1b:0xa6552d2c22c977ed!8m2!3d32.5246119!4d-117.0131368?hl=es&shorturl=1'
                                        target={'_blank'} rel="noreferrer">
                                        <img src='resources/images/socialmedia-googlemaps.svg'
                                            alt='socialmedia-map' /></a>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
