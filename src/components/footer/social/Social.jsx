import React from "react";
import { SocialStl } from "./social.style";
import { ReactComponent as LogoTablet } from '../../../images/header/logoTablet.svg';
import { ReactComponent as LogoDesctop } from '../../../images/header/logoDesctop.svg';
import { ReactComponent as Vk } from '../../../images/contactsIcons/vk.svg';
import { ReactComponent as Ppp } from '../../../images/contactsIcons/p.svg';
import { ReactComponent as Classmates } from '../../../images/contactsIcons/classmates.svg';

export const Social = ({isSizeWindow}) => {
    const renderLogo = (isSizeWindow) => {
        switch (isSizeWindow) {
          case 'mobile':
            return <LogoTablet/>
          case 'tablet':
            return <LogoDesctop/>
          case 'desctop':
            return <LogoDesctop/>
          default:
            break;
        }
    }
    return (
        <SocialStl>
            {renderLogo(isSizeWindow)}
            {isSizeWindow === 'desctop' ? <p className='social__text'>Интернет-магазин кофейных напитков</p> : ''}
            <ul className='social__list'>
              <li className='social__point'><Vk/></li>
              <li className='social__point'><Ppp/></li>
              <li className='social__point'><Classmates/></li>
            </ul>

        </SocialStl>
    );
}
