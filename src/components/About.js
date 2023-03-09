import React from 'react';

const About = () =>{
    return(
        <section id="About" className='section-about'>
             <div className='container'>
                <h1>Nuestra experiencia</h1>
                <div className='about-image'>
                    <img src='resources/images/FotoDoctora.Nosotros.png' alt=''/>
                </div>
                <div className='about-description'>
                    <h2>Dra. Karla Bonilla</h2>
                    <p>Somos un grupo de especialistas en Odontología
                        Pediátrica con más de 15 años de experiencia en
                        la atención de los más pequeños.<br/><br/>
                        En constante actualización, buscando la mejor
                        tecnología y todas las alternativas de atención
                        para lograr la mejor experiencia dentro de
                        nuestra consulta, haciendo agradable y
                        memorable las visitas al dentista.</p>
                </div>
             </div>
        </section>
    )
}

export default About;