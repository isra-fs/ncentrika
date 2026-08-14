import React, { useEffect, useRef } from 'react';
import { AppoinmentButton, GeneralButton } from './Button';

const VIDEO_SRC = 'resources/videos/homeVideo.mp4';

const Home = () => {
    const videoRef = useRef(null);

    const openDentalInsurance = () => {
        window.open('resources/Seguro-Dental-Americano.pdf', '_blank', 'noopener,noreferrer');
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const playWhenReady = () => {
            video.play().catch(() => {});
        };

        const loadAndPlay = () => {
            if (!video.getAttribute('src')) {
                video.setAttribute('src', VIDEO_SRC);
                video.load();
            }
            if (video.readyState >= 2) {
                playWhenReady();
            } else {
                video.addEventListener('loadeddata', playWhenReady, { once: true });
            }
        };

        // Hero is above the fold; IO still avoids starting the download until painted,
        // and keeps a single autoplay path for muted + playsInline.
        if (typeof IntersectionObserver === 'undefined') {
            loadAndPlay();
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    loadAndPlay();
                    observer.disconnect();
                }
            },
            { rootMargin: '80px' }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

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
                <div className="home-video">
                    <video
                        ref={videoRef}
                        poster="resources/images/homeVideo-poster.webp"
                        muted
                        autoPlay
                        loop
                        playsInline
                        preload="none"
                    />
                </div>
            </div>
        </section>
    )
}

export default Home;
