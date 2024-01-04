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
                <li className='header__point'>Главная</li>
                <li className='header__point'>Каталог</li>
                <li className='header__point'>Доставка</li>
                <li className='header__point'>О нас</li>
            </ul>
            <button className="header__burger" onClick={handleMenu}>
                {!isMenu ? <Burger/> : <Close/>}
            </button>
        </MenuStl>
    );
}