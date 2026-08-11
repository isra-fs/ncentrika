import React from 'react';
import { AppoinmentButton, GeneralButton } from './Button';
const Home = () => {
    const openDentalInsurance = () => {
        window.open('resources/Seguro-Dental-Americano.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="Home" className='section-home' >
            <div className="container-home">
            <div className="home-video responsive">
                    <video 
                    src='resources/videos/homeVideo.mp4' 
                    muted={true} 
                    autoPlay={true} loop={true}>
                    
                    </video>

                </div>
                <div className="home-slogan">
                    <h1>Un futuro para sonreir</h1>
                    <p>La mejor experiencia en atención dental para bebés, niños, adolescentes y sus familias.</p>
                    <div className="home-cta">
                        <AppoinmentButton text={'Agenda hoy'} extraClass="home-appoinment"/>
                        <GeneralButton text={'Seguro dental'} extraClass="home-pdf" onclick={openDentalInsurance} />
                    </div>
                </div>
                <div className="home-video destock">
                    <video 
                    src='resources/videos/homeVideo.mp4' 
                    muted={true} 
                    autoPlay={true} loop={true}>
                    
                    </video>

                </div>
            </div>
        </section>
    )
}

export default Home;