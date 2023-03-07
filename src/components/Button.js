import React from 'react';

export const AppoinmentButton = ({text,extraClass=''}) => {
    return (
        <a className={`appoinment-general-button ${extraClass}`} target="_blank"
         href="https://api.whatsapp.com/send?phone=6646706182" data-action="share/whatsapp/share" rel="noreferrer">{text}</a>
    )
}
export const GeneralButton = ({text,extraClass='',onclick}) => {
    return (
        <button className={`appoinment-general-button ${extraClass}`} onClick={onclick}>{text}</button>
    )
}
export const PhoneButton = ({number,href,extraClass}) => {
    return (
        <a className={`phone-general-button ${extraClass}`} href={href}>{number}</a>
    )
}