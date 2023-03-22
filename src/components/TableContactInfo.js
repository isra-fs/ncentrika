import React from 'react';
import { AppoinmentButton } from './Button'
const TableContactInfo = () => {
    return (
        <section className='section-table-info'>
            <div className='container'>
                <div className='contact-table-information'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Horarios</th>
                                <th>Urgencias dentales</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Lunes a Viernes<br /> 9:00am – 6:00pm</th>
                            <th>Favor de enviar mensaje directo a nuestra liga de <strong>Instagram</strong> o <strong>Whatsaap</strong></th>
                        </tr>
                        <tr>
                            <th>Sábados<br />  9:00am – 2:00pm</th>
                            <th>* La consulta de urgencia fuera de horario tiene un cargo extra en honorarios médicos.</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th> <AppoinmentButton text={'Quiero agendar una cita'} extraClass="contact-appoinment-two desk" /></th>
                        </tr>
                        </tbody>
                    </table>
                    <AppoinmentButton text={'Quiero agendar una cita'} extraClass="contact-appoinment-two mobile" />
                </div>

            </div>
            <div className='contact-map-information'>
                <iframe width="100%" height="700" title="clubMap"
                    id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.2551038810616!2d-117.0123902!3d32.519332999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9499106d91f1b%3A0xa6552d2c22c977ed!2sNc%C3%A9ntrika%20%2F%20Dra.%20Karla%20Bonilla!5e0!3m2!1ses!2smx!4v1678932221229!5m2!1ses!2smx"
                >
                </iframe>
            </div>

        </section>
    )
}

export default TableContactInfo;