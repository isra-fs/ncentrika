

import React from 'react';

const InnovationList = () => {
    return (

        <div className="row justify-content-md-center hide-innovation-list" id="hideInnovationList">
            <div className="col-md-auto" >
                <img src='resources/images/1.jpg' alt='Laser diodo en odontología pediátrica'></img>
            </div>
            <div className="col-md-auto">
                <h1>Laser diodo en odontología pediátrica</h1>
                <ul className='laser-list'>
                    <li>Cirugía de tejidos blandos (frenillo lingual corto, 
                        exposición de diente retenido, recorte de encía, etc.)</li>
                    <li>Desinfección de conductos radiculares y abscesos periapicales</li>
                    <li>Acelera tratamientos de ortodoncia</li>
                    <li>Curación de lesiones aftosas</li>
                    <li>Curación de dolor en la articulación temporomandibular</li>
                    <li>RWehabilita procesos inflamatorios de extracciones o tratamientos en general</li>
                </ul>
            </div>
            <div className="col-md-auto">
                <img src='resources/images/2.jpg' alt='Itero (Scanner dental)'></img>
            </div>
            <div className="col-md-auto">
                <h1>Itero (Scanner dental)</h1>
                <ul className='laser-list'>
                    <li>Registro digital de arcos dentales para tratamientos de ortodoncia invisible</li>
                    <li>Tecnología Ni Ti que nos permite ver lesiones cariosas sin radiografía</li>
                    <li>Cámara intraoral integrada para observar estructura dental</li>
                    <li>Podemos ver transformada tu sonrisa en minutos</li>
                </ul>
            </div>
            <div className="col-md-auto">
                <img src='resources/images/3.jpg' alt='Radiografía digital'></img>
            </div>
            <div className="col-md-auto">
                <h1>Radiografía digital</h1>
                <p>
                Herramienta de diagnóstico que nos permite observar estructuras internas 
                de los dientes; en la odontopediatría se utiliza para la valoración de los
                 tratamientos pre y post operatorios. La digitalización de estos procesos
                  favorece a una menor radiación para el paciente, una definición mas alta de 
                  imagen y nos brinda la oportunidad de observar estructuras 
                anatómicas que en una radiografía convencional no se distinguen adecuadamente.
                </p>
            </div>



            <div className="col-md-auto ">
                <img src='resources/images/4.jpg' alt='Software de lectura de tomografía'></img>
            </div>
            <div className="col-md-auto">
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
            <div className="col-md-auto">
                <img src='resources/images/5.jpg' alt='Software Nemoceph'></img>
            </div>
            <div className="col-md-auto">
                <h1>Software Nemoceph</h1>
                <p>
                Es la herramienta digital mas completa para el diagnostico y plan de tratamiento 
                en ortodoncia. Nos permite realizar el trazado de las medidas del 
                cráneo del paciente y poder hacer el plan de tratamiento predecible y correcto.
                </p>
            </div>
            <div className="col-md-auto">
                <img src='resources/images/6.jpg' alt='Articulador AD2'></img>
            </div>
            <div className="col-md-auto">
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

    )
}

export default InnovationList;