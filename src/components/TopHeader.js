// Header.js
import React from 'react';

const TopHeader = () =>{

    return(
        <div className='top-header'>
            <a href='https://www.facebook.com/DraKarlaBonilla' target={'_blank'} rel="noreferrer">
                <img src='resources/images/socialmedia-facebook.svg'alt='socialmedia-facebook'/>
            </a>
            <a href='https://www.instagram.com/dra._karla_bonilla/' target={'_blank'} rel="noreferrer">
                <img src='resources/images/socialmedia-instagram.svg' alt='socialmedia-instagram'/>
            </a>
            <a href='https://www.youtube.com/channel/UCIngEV2uWOW0DMgPsCXYrfA' 
            target={'_blank'} rel="noreferrer">
                <img src='resources/images/socialmedia-youtube.svg' alt='socialmedia-youtube'/>
            </a>
            <a href='https://www.google.com.mx/maps/place/Dental+Pedi%C3%A1trica%2F+Dra.+Karla+Bonilla/@32.5246159,-117.0153247,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9499106d91f1b:0xa6552d2c22c977ed!8m2!3d32.5246119!4d-117.0131368?hl=es&shorturl=1'
             target={'_blank'} rel="noreferrer">
                <img src='resources/images/socialmedia-googlemaps.svg' 
             alt='socialmedia-map'/></a>
        </div>
    )
}

export default TopHeader;