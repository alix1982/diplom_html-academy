import React from "react";
import { FooterStl } from "./footer.style";
import { Social } from "./social/Social";
import { Store } from "./store/Store";
import { Media } from "./media/Media";
import { Contacts } from "./contacts/Contacts";
import { Link } from "react-router-dom";
import {ReactComponent as HtmlAcademyIcon} from '../../images/contactsIcons/htmlAcademyIcon.svg'

export const Footer = ({isSizeWindow}) => {

  return (
      <FooterStl>
        <Social isSizeWindow={isSizeWindow} />
        <span className="footer__line"></span>
        <Store />
        <span className="footer__line"></span>
        <Media />
        <span className="footer__line"></span>
        <Contacts />
        <span className="footer__line"></span>
        <a className='footer__link' href='https://htmlacademy.ru/intensive/adaptive' target="_blank" rel="noreferrer">
          Разработано в HTML Academy
          <HtmlAcademyIcon />
        </a>
      </FooterStl>
  );
}
