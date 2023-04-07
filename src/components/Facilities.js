import React from 'react';
import { Slide } from 'react-slideshow-image';
const Facilities = () => {
	const slideImages = [
		{
		  url: 'resources/images/facilities1.webp',
		  id:1,
		},
		{
		  url: 'resources/images/facilities2.webp',
		  id:2,
		},
		{
		  url: 'resources/images/facilities1.webp',
		  id:3,
		},
		{
		  url: 'resources/images/facilities2.webp',
		  id:4,
		},
	  ];
  return (
    <section className="section-facilities" >
		  <h1 className='section-title'>Nuestras instalaciones</h1>
	<Slide>
         {slideImages.map((slideImage, index)=> (
			<>
				<div key={slideImage.id} >
					<div className='slide-facilities-img'>
						<div style={{'backgroundImage': `url(${slideImage.url})` }}></div>
					</div>
				</div>
				<div className='slide-botton-background'></div>
			</>
          ))} 
		  
        </Slide>
    </section>
  )
}

export default Facilities;