
import React from 'react';

const InnovationList = () => {
    return (

        <div className="innovation-list hide-innovation-list" id="hideInnovationList">
            <div className="innovation-item">
                <img
                    src='resources/images/1.webp'
                    alt='Laser diodo en odontología pediátrica'
                    width={300}
                    height={250}
                    loading='lazy'
                    decoding='async'
                />
                <div className="innovation-copy">
                    <h1>Laser diodo en odontología pediátrica</h1>
                    <ul className='laser-list'>
                        <li>Cirugía de tejidos blandos (frenillo lingual corto, 
                            exposición de diente retenido, recorte de encía, etc.)</li>
                        <li>Desinfección de conductos radiculares y abscesos periapicales</li>
                        <li>Acelera tratamientos de ortodoncia</li>
                        <li>Curación de lesiones aftosas</li>
                        <li>Curación de dolor en la articulación temporomandibular</li>
                        <li>Rehabilitación procesos inflamatorios de extracciones o tratamientos en general</li>
                    </ul>
                </div>
            </div>
            <div className="innovation-item">
                <img
                    src='resources/images/2.webp'
                    alt='Itero (Scanner dental)'
                    width={300}
                    height={603}
                    loading='lazy'
                    decoding='async'
                />
                <div className="innovation-copy">
                    <h1>Itero (Scanner dental)</h1>
                    <ul className='laser-list'>
                        <li>Registro digital de arcos dentales para tratamientos de ortodoncia invisible</li>
                        <li>Tecnología Ni Ti que nos permite ver lesiones cariosas sin radiografía</li>
                        <li>Cámara intraoral integrada para observar estructura dental</li>
                        <li>Podemos ver transformada tu sonrisa en minutos</li>
                    </ul>
                </div>
            </div>
            <div className="innovation-item">
                <img
                    src='resources/images/4.webp'
                    alt='Software de lectura de tomografía'
                    width={300}
                    height={225}
                    loading='lazy'
                    decoding='async'
                />
                <div className="innovation-copy">
                    <h1>Software de lectura de tomografía</h1>
                    <p>
                    La tomografía computarizada (exploración por TC o TAC) se ubica entre 
                    uno de los cinco desarrollos médicos más importantes de los últimos 50 años.
                     En ocasiones observamos clínicamente algún signo que nos indica 
                     la necesidad de un estudio mas profundo de los tejidos del cráneo.
                      Contamos con un software especializado en la lectura de estas 
                      imágenes que nos permiten analizar el cráneo en tercera dimensión y
                       la exactitud en el plan de tratamiento.
                    </p>
                </div>
            </div>
            <div className="innovation-item">
                <img
                    src='resources/images/5.gif'
                    alt='Software Nemoceph'
                    width={300}
                    height={282}
                    loading='lazy'
                    decoding='async'
                />
                <div className="innovation-copy">
                    <h1>Software Nemoceph</h1>
                    <p>
                    Es la herramienta digital mas completa para el diagnostico y plan de tratamiento 
                    en ortodoncia. Nos permite realizar el trazado de las medidas del 
                    cráneo del paciente y poder hacer el plan de tratamiento predecible y correcto.
                    </p>
                </div>
            </div>
            <div className="innovation-item">
                <img
                    src='resources/images/6.webp'
                    alt='Articulador AD2'
                    width={300}
                    height={225}
                    loading='lazy'
                    decoding='async'
                />
                <div className="innovation-copy">
                    <h1>Articulador AD2</h1>
                    <p>
                    El articulador simula los movimientos mandibulares del paciente; 
                    proporciona las relaciones estáticas y dinámicas para poder 
                    observar aquellas maloclusiones o disfuncionalidades de forma extraoral.
                     Gracias a ello podemos estudiar de forma ilimitada las pautas para su 
                     tratamiento sin el cansancio o molestias sobre el paciente.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default InnovationList;
