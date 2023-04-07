import React from 'react';
import { GeneralButton, AppoinmentButton } from './Button'
const Contact = () => {
    return (
        <section id="Contact" className='section-contact'>
            <div className='container'>
                <h1 className='section-title'>Contáctanos</h1>
                <div className="row justify-content-md-center">

                    <div className="col-md-auto contact-form">
                        <form>
                            <div><label>Nombre:*</label><input type="text" id="inputName"></input></div>
                            <div><label>Télefono:*</label><input type="tel" id="inputTel"></input></div>
                            <div><label>E-Mail:</label><input type="email" id="inputEmail"></input></div>
                            <div><label>Mensaje:</label><textarea name="meesage" rows="2" ></textarea></div>

                        </form>
                        <GeneralButton text={'Enviar'} extraClass={'form-generalButton'} />
                    </div>
                    <div className="col-md-auto">
                        <div className='information-contact'>
                            <p >Torre Platino Piso 4 Interior 402
                                Blvd. Rodolfo Sanchez Taboada
                                #10488 Zona Urbana Rio
                                C.P. 23010 Tijuana B.C. México</p>
                            <div>
                                <p>Teléfono: 664 6804029 <br />
                                    <strong>Whatsapp:</strong><br />
                                    664 6706182 | 664 7656045</p>
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