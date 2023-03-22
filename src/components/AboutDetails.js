



import React from 'react';

const AboutDetails = () => {

    return (
        <section className='section-about-detail' >
            <div className="container">

                <div className="gallery-wrap">
                    <div className="item item-1"> <h1>Formación</h1>
                    <p><strong>Dra. Karla María Bonilla Chico</strong><br/>
                        Odontopediatra<br/>
                        Ced. Prof. 3976114<br/>
                        Ced. Especialista: 10487345<br/>
                        Universidad Autónoma de Baja California
                        </p>
                        <img src='resources/images/acordion1.png' alt='Odontologia bebe'></img>
                    </div>
                    <div className="item item-2"> <h1>Visión</h1>
                    <p>Fomentar y proteger la salud integral y oral de nuestros 
                        pacientes con atención de máxima calidad y calidez buscando 
                        siempre soluciones innovadoras, creando un nuevo concepto de 
                        atención dental que genere experiencias positivas y extraordinarias 
                        para nuestros pacientes y su familia.
                        </p>
                        <img src='resources/images/acordion1.png' alt='Odontologia bebe'></img>
                    </div>
                    <div className="item item-3" ><h1>Misión</h1>
                    <p>Fomentar y proteger la salud integral y oral de nuestros pacientes 
                        con atención de máxima calidad y calidez buscando siempre 
                        soluciones innovadoras, creando un nuevo concepto de atención 
                        dental que genere experiencias positivas y extraordinarias 
                        para nuestros pacientes y su familia.
                        </p>
                        <img src='resources/images/acordion1.png' alt='Odontologia bebe'></img>
                    </div>
                    <div className="item item-4" id='defaultOn'><h1>Valores</h1>
                        <p>Los valores en los que estamos sustentados son una gran pasión por nuestro trabajo y 
                            el bienestar de nuestros pacientes, un compromiso con la salud de los niños y 
                            sus familias trabajando con gran humanismo, solidaridad, ética, respeto y honradez.
                        </p>
                        <img src='resources/images/acordion1.png' alt='Odontologia bebe'></img>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutDetails;