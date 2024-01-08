import React, { useEffect } from "react";
import { MenuStl } from "./header.style";
import { ReactComponent as Burger } from '../../images/header/burger.svg';
import { ReactComponent as Close } from '../../images/header/close.svg';

export const Menu = ({ handleMenu, isMenu, setIsMenu }) => {
    
    useEffect(()=> {
        function onCloseEsc (evt) { evt.key === 'Escape' && setIsMenu(false) };
        document.addEventListener('keydown', onCloseEsc);
        return () => {!isMenu && document.removeEventListener('keydown', onCloseEsc)}
      })

    return (
        <MenuStl >
            <ul className={`header__menu ${isMenu ? 'header__menu_active' : ''} `}>
                <li className='header__point header__point_active'>
                    <a className="header__link header__link_active" href="#slider">
                        Главная
                    </a>
                </li>
                <li className='header__point'>
                    <a className="header__link" href="#catalog">
                        Каталог
                    </a>
                </li>
                <li className='header__point'>
                    <a className="header__link" href="#maps">
                        Доставка
                    </a>
                </li>
                <li className='header__point'>
                    <a className="header__link" href="#advantages">
                        О нас
                    </a>
                </li>
            </ul>
            <button className="header__burger" onClick={handleMenu}>
                {!isMenu ? <Burger/> : <Close/>}
            </button>
        </MenuStl>
    );
}

