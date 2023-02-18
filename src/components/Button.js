import React from 'react';

export const AppoinmentButton = ({text,extraClass='',onclick}) => {
    return (
        <button className={`appoinment-general-button ${extraClass}`} onClick={onclick}>{text}</button>
    )
}
export const PhoneButton = ({number,href}) => {
    return (
        <a className='phone-general-button' href={href}>{number}</a>
    )
}