import React from "react";
import { HeaderStl } from "./header.style";
import { ReactComponent as LogoMobile } from '../../images/header/logoMobile.svg';
import { ReactComponent as LogoTablet } from '../../images/header/logoTablet.svg';
import { ReactComponent as LogoDesctop } from '../../images/header/logoDesctop.svg';
import { Menu } from "./Menu";
import { Login } from "./Login";
import { Basket } from "./Basket";

export const Header = ({isSizeWindow, onCloseOverlay, handleMenu, isMenu, setIsMenu}) => {
  const renderLogo = (isSizeWindow) => {
    switch (isSizeWindow) {
      case 'mobile':
        return <LogoMobile/>
      case 'tablet':
        return <LogoTablet/>
      case 'desctop':
        return <LogoDesctop/>
      default:
        break;
    }
  }
  return (
      <HeaderStl onClick={onCloseOverlay}>
        {renderLogo(isSizeWindow)}
        <p className='header__text'>Интернет-магазин кофейных напитков</p>
        <Menu
          handleMenu={handleMenu}
          isMenu={isMenu}
          setIsMenu={setIsMenu}
        />
        <Login />
        <Basket />
        
      </HeaderStl>
  );
}
