import React from 'react';
import { AppoinmentButton, GeneralButton } from './Button';

const RAINBOW_BANDS = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'];
const SUN_RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

const Home = () => {
    const openDentalInsurance = () => {
        window.open('resources/Seguro-Dental-Americano.pdf', '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="Home" className='section-home' >
            <div className="container-home">
                <div className="home-slogan">
                    <h1>UN FUTURO PARA SONREIR</h1>
                    <p>La mejor experiencia en atención dental para bebés, niños, adolescentes y sus familias.</p>
                    <div className="home-cta">
                        <AppoinmentButton text={'Agenda hoy'} extraClass="home-appoinment"/>
                        <GeneralButton text={'Seguro dental'} extraClass="home-pdf" onclick={openDentalInsurance} />
                    </div>
                </div>
                <div className="home-visual" aria-hidden="true">
                    <div className="home-rainbow">
                        <div className="rainbow-sun">
                            <div className="sun-rays">
                                {SUN_RAYS.map((angle) => (
                                    <span
                                        key={angle}
                                        className="sun-ray"
                                        style={{ '--ray': `${angle}deg` }}
                                    />
                                ))}
                            </div>
                            <div className="sun-disc" />
                        </div>
                        <div className="rainbow-stack">
                            {RAINBOW_BANDS.map((band) => (
                                <div key={band} className={`rainbow-band ${band}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
