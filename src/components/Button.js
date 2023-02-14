import React from 'react';

export const AppoinmentButton = ({text}) => {
    return (
        <button className='appoinment-general-button'>{text}</button>
    )
}
export const PhoneButton = ({number,href}) => {
    return (
        <a className='phone-general-button' href={href}>{number}</a>
    )
}