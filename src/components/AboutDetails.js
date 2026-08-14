import React, { useState } from 'react';

const ITEMS = [
    {
        id: 'formacion',
        title: 'Formación',
        colorClass: 'item-1',
        body: (
            <p>
                <strong>Dra. Karla María Bonilla Chico</strong><br />
                Odontopediatra<br />
                Ced. Prof. 3976114<br />
                Ced. Especialista: 10487345<br />
                Universidad Autónoma de Baja California
            </p>
        ),
    },
    {
        id: 'mision',
        title: 'Misión',
        colorClass: 'item-3',
        body: (
            <p>
                Fomentar y proteger la salud integral y oral de nuestros
                pacientes con atención de máxima calidad y calidez buscando
                siempre soluciones innovadoras, creando un nuevo concepto de
                atención dental que genere experiencias positivas y extraordinarias
                para nuestros pacientes y su familia.
            </p>
        ),
    },
    {
        id: 'vision',
        title: 'Visión',
        colorClass: 'item-2',
        body: (
            <p>
                Fomentar y proteger la salud integral y oral de nuestros pacientes
                con atención de máxima calidad y calidez buscando siempre
                soluciones innovadoras, creando un nuevo concepto de atención
                dental que genere experiencias positivas y extraordinarias
                para nuestros pacientes y su familia.
            </p>
        ),
    },
    {
        id: 'valores',
        title: 'Valores',
        colorClass: 'item-4',
        body: (
            <p>
                Los valores en los que estamos sustentados son una gran pasión por nuestro trabajo y
                el bienestar de nuestros pacientes, un compromiso con la salud de los niños y
                sus familias trabajando con gran humanismo, solidaridad, ética, respeto y honradez.
            </p>
        ),
    },
];

const AboutDetails = () => {
    const [openId, setOpenId] = useState('formacion');

    return (
        <section className="section-about-detail">
            <div className="container">
                <div className="gallery-wrap" role="tablist">
                    {ITEMS.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`item ${item.colorClass}${isOpen ? ' is-open' : ''}`}
                            >
                                <button
                                    type="button"
                                    className="item-tab"
                                    role="tab"
                                    aria-selected={isOpen}
                                    aria-expanded={isOpen}
                                    onClick={() => setOpenId(item.id)}
                                >
                                    {item.title}
                                </button>
                                <div className="item-body" hidden={!isOpen}>
                                    {item.body}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutDetails;
