import React, { useEffect, useState, useRef } from 'react';
import { getReviewsfromGoogle } from '../services/googleReviews';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const Testimonials = () => {
    const [reviewsList, setReviewsList] = useState([]);
    const [index, setIndex] = React.useState(0);
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];

    useEffect(() => {
        setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        )
        getReviewsfromGoogleList()
    }, [])

    const getReviewsfromGoogleList = async () => {
        try {
           const reviewList = await getReviewsfromGoogle();
            setReviewsList(reviewList)
        } catch (error) {
            console.log(error);
        }

    };


    return (
        <section className='section-testimonials'>
           {reviewsList.length > 0 &&
            <Slide autoplay={false}>
                {
                    reviewsList.map((item, index) => {
                        return (
                            <div className="each-slide-effect" key={index}>
                                <a  target="_blank"
                                href={item.author_url} data-action="share/whatsapp/share" rel="noreferrer">
                                <div>
                                    
                                    <div className='testimonal-user'>
                                        <img src={item.profile_photo_url} alt={index}></img>
                                        <div>
                                            <h2>{item.author_name}</h2>
                                            <div>
                                            {Array.from(Array(item.rating), (e, i) => {
                                                return <i class="star" key={i}></i>
                                            })}
                                            
                                            <h6>{item.relative_time_description}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                                </a>
                            </div>
                        )
                    })
                }
            </Slide> }
        </section>

    )
}

export default Testimonials;