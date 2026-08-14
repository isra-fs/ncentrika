import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slideImages = [
	{ url: 'resources/images/facilities1.webp', id: 1 },
	{ url: 'resources/images/facilities2.webp', id: 2 },
	{ url: 'resources/images/facilities3.webp', id: 3 },
	{ url: 'resources/images/facilities4.webp', id: 4 },
	{ url: 'resources/images/facilities5.webp', id: 5 },
	{ url: 'resources/images/facilities6.webp', id: 6 },
	{ url: 'resources/images/facilities7.webp', id: 7 },
	{ url: 'resources/images/facilities8.webp', id: 8 },
];

const Facilities = () => {
	return (
		<section className="section-facilities">
			<h1 className="section-title">Nuestras instalaciones</h1>
			<div className="facilities-slider">
				<div className="slide-botton-background" aria-hidden="true" />
				<div className="container">
					<Slide
						autoplay
						infinite
						canSwipe
						pauseOnHover
						arrows
						indicators={false}
						duration={5000}
						transitionDuration={450}
						easing="ease"
						slidesToShow={1}
						slidesToScroll={1}
						responsive={[
							{ breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 1 } },
							{ breakpoint: 700, settings: { slidesToShow: 2, slidesToScroll: 1 } },
						]}
					>
						{slideImages.map((slideImage) => (
							<div className="facilities-slide" key={slideImage.id}>
								<figure className="facilities-card">
									<img
										src={slideImage.url}
										alt="Instalaciones Ncéntrika"
										loading="lazy"
										decoding="async"
									/>
								</figure>
							</div>
						))}
					</Slide>
				</div>
			</div>
		</section>
	);
};

export default Facilities;
