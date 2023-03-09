import React from 'react';
import { GeneralButton } from './Button';
const Services = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const hideServices = document.getElementById('hideServices');
        hideServices.classList.remove('hide-services');
        hideServices.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 2000,
        });
      }
    return (
        <section id="Services" className='section-services'>
            <div className='conteiner-services'>
                <div className="container">
                    <h1>Servicios</h1>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <div className='image-container'><img src='resources/images/odontologia_bebe.svg' alt='Odontologia bebe'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Odontologia para el bebe</h1>
                            <p>Comprende los cuidados de la higiene oral en los primeros meses de vida (0-36 meses) y 
                        la atención a las afecciones especificas en esta etapa del desarrollo como: frenillo lingual corto, 
                        dientes neonatales, candidiasis, etc.</p>
                        
                        </div>
                        <div className="col-md-auto">
                        <div className='image-container'> <img src='resources/images/odontologia_restaurativa.svg' alt='Odontologia Restaurativa'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Odontologia restaurativa</h1>
                            <p>Abarca la rehabilitación de los órganos dentales ya afectados por lesiones cariosas o traumatismos.</p>
                        
                        </div>
                        <div className="col-md-auto">
                        <div className='image-container'> <img src='resources/images/R_D_anestesia.svg' alt='Rehabilatacion dental bajo anestesia general'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Rehabilatacion dental bajo anestesia general</h1>
                            <p>
                            Se realiza la rehabilitación de los dientes lesionados bajo anestesia general en pacientes 
                            con trastornos de la conducta o condiciones especiales como autismo, síndromes, etc.
                            </p>
                        </div>
                    </div>
                    <div className="container hide-services" id="hideServices">
                    <div className="row justify-content-md-center">
   
                        <div className="col-md-auto ">
                        <div className='image-container'> <img src='resources/images/M_I_preventiva.svg' alt='Odontologia minimamente invasiva y preventiva'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Odontologia minimamente invasiva y preventiva</h1>
                            <p>
                            Se refiere a las técnicas alternativas de los tratamientos convencionales en odontología 
                            que nos permiten un acercamiento atraumático al paciente complementándolas con medidas 
                            preventivas para detener el proceso de la enfermedad.
                            </p>
                        </div>
                        <div className="col-md-auto">
                        <div className='image-container'>  <img src='resources/images/ortodoncia_invisible.svg' alt='Ortodoncia invisible'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Ortodoncia invisible</h1>
                            <p>
                            Con los alineadores ayudamos a mejorar la sonrisa de los niños evitando el uso de aparatología
                             convencional. Son fáciles de usar y muy cómodos. 
                             Pueden realizar todas sus actividades y deportes sin ningún peligro,
                              además de generar el espacio necesario para la erupción de los dientes permanentes y 
                              corregir maloclusiones.
                            </p>
                        </div>
                        <div className="col-md-auto">
                        <div className='image-container'><img src='resources/images/ortodoncia_convencional.svg' alt='Ortodoncia convencional'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Ortodoncia convencional</h1>
                            <p>
                            Es el tratamiento que se utiliza con aparatología fija para corregir la posición dental y 
                            las maloclusiones.
                            </p>
                        </div>
                        <div className="col-md-auto">
                        <div className='image-container'><img src='resources/images/ortopedia_maxilar.svg' alt='Ortopedia maxilar'></img></div>
                        </div>
                        <div className="col-md-auto">
                            <h1>Ortopedia maxilar</h1>
                            <p>
                            Es una técnica que ayuda a la prevención, corrección y tratamiento de problemas 
                            de crecimiento y desarrollo dentofacial. Nos permite estimular el crecimiento de los 
                            maxilares y llevarlos a la posición adecuada tanto dental como esqueletalmente.
                            </p>
                        </div>
                    </div>

                </div>
                    <GeneralButton
                        text='Más Servicios'
                        extraClass='show-more-elements'
                        onclick={handleClick}
                        />
                    </div>
            </div>
        </section>
    )
}

export default Services;