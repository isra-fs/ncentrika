import React from 'react';
const Appointment = () => {
	return (
		<section id="Appointment" className='section-appointment'>
			<div className='container'>
				<h1 className='section-title'>Métodos de pago</h1>
				<ul >
					<li>Efectivo</li>
					<li>Tarjeta de crédito o débito</li>
					<li>Transferencia Bancaria</li>
					<li>Opción de pago a meses sin intereses</li>
					<li>No aceptamos cheques</li>
				</ul>
				<div className='appointment-description'>
					<h2>Facturación</h2>
					<p>Para facturarle es necesario que presente o nos envíe su constancia
						de situación fiscal actualizada.</p>
				</div>
				<div className='appointment-description'>
					<h2>Aseguranzas</h2>
					<p>Aceptamos aseguranzas dentales con plan PPO de Estados Unidos.<br />
						Si su pago es a través de aseguranza extranjera favor de descargar y llenar esta solicitud de
						verificación con la información completa y llevarla a su cita para que su trámite sea más rápido y
						su pago sea solicitado sin demoras.</p>
				</div>
			</div>
		</section>
	)
}
export default Appointment;