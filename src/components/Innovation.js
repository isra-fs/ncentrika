import React from 'react';
import { GeneralButton } from './Button';
import InnovationList from './InnovationList';
import Facilities from './Facilities';
const Innovation = () => {

    const handleClick = (e) => {
        e.preventDefault();
        const hideList = document.getElementById('hideInnovationList');
        const innovationPreview = document.getElementById('innovationPreview');
        innovationPreview.classList.add('hide-innovation-list')
        hideList.classList.remove('hide-innovation-list');
        hideList.animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
            duration: 2000,
        });
      }
    return (
        <section id="Innovation" className='section-innovation'>
            <div className='container'>
                <h1>Innovación en tecnología</h1>
                <ul id="innovationPreview">
                    <li>Laser diodo en odontología pediátrica</li>
                    <li>Itero (Scanner dental)</li>
                    <li>Radiografía digital</li>
                    <li>Software de lectura de tomografía</li>
                    <li>Software Nemoceph</li>
                    <li>Articulador AD2</li>
                </ul>
                <InnovationList></InnovationList>
                <GeneralButton
                        text='Ver más'
                        extraClass='show-more-elements'
                         onclick={handleClick}
                        />
                   <Facilities/>
            </div>
     
        </section>
    )
}

export default Innovation;