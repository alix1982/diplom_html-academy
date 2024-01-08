import React from "react";
import { ContactsStl } from "./contacts.style";
import { ReactComponent as Geo } from '../../../images/contactsIcons/geo.svg';
import { ReactComponent as Phone } from '../../../images/contactsIcons/phone.svg';

export const Contacts = () => {

    return (
        <ContactsStl>
            <h2 className='contacts__heading'>Контакты</h2>
            <ul className='contacts__list'>
                <li className='contacts__point'>
                    <Geo/> 
                    <p className='contacts__pointText'>Санкт-Петербург, набережная реки Карповки, дом 5</p>
                </li>
                <li className='contacts__point'>
                    <Phone/>
                    <p className='contacts__pointText'>+7 (999) 999-99-99</p>
                </li>
            </ul>
        </ContactsStl>
    );
}
