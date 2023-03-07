import React from 'react';
import { AppoinmentButton } from './Button';
const Home = () => {
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
                    <AppoinmentButton text={'Agenda hoy'}/>
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