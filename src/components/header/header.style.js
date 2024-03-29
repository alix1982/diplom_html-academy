import styled from 'styled-components';

export const HeaderStl = styled.header`
    display: flex;
    align-items: center;
    width: calc(100% - 20px);
    margin-left: 20px;
    @media (min-width: 600px) {
        width: calc(100% - 40px);
        margin: 0 20px;
    }
    @media (min-width: 1400px) {
        width: calc(100% - 80px);
        margin: 0 40px;
    }
    .header__text {
        width: 126px;
        display: none;
        margin: 0;
        margin-left: 20px;
        color: #333;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        @media (min-width: 1400px) {
            display: flex;
        }
    }
`;

export const MenuStl = styled.nav`
    display: flex;
    height: 16px;
    margin: 22px 22px 22px 22px;
    order: 10;
    @media (min-width: 600px) {
        margin: 0 auto;
        order: 0;
    }
    
    .header__menu {
        display: none;
        list-style: none;
        padding: 0;
        @media (min-width: 600px) {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 auto;
            padding: 0;
            border: none;
            position: static;
        }
        @media (min-width: 1400px) {
            gap: 20px;
        }
    }

    .header__menu_active {
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        right: 40px;
        z-index: 500;
        margin: 0;
        padding: 20px;
        border: 1px solid #000000;
        border-radius: 10px;
        background-color: #ffffff;
    }
    .header__point {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.24px;
        text-transform: uppercase;
        transition: opacity 0.5s linear;
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
        @media (min-width: 600px) {
            padding: 22px 20px;
        }
    }
    .header__point_active {
        @media (min-width: 600px) {
            border-bottom: 2px solid #7859CF;
        }
    }
    .header__link {
        text-decoration: none;
        color: #333;
    }
    .header__link_active {
        color: #7859CF;
    }
    .header__burger {
        border: none;
        background-color: transparent;
        padding: 0;
        @media (min-width: 600px) {
            display: none;
        }
    }
`;

export const LoginStl = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 22px 22px 22px auto;
    transition: opacity 0.5s linear;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }
    @media (min-width: 600px) {
        margin: 22px;
    }

    .login__text {
        color: #333;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.24px;
        text-transform: uppercase;
        @media (max-width: 1400px) {
            display: none;
        }
    }
`;

export const BasketStl = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    padding: 0;
    margin: 22px 22px 22px 22px;
    transition: opacity 0.5s linear;
    cursor: pointer;
    &:hover {
        opacity: 0.6;
    }

    .basket__text {
        color: #333;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.24px;
        text-transform: uppercase;
        @media (max-width: 1400px) {
            display: none;
        }
    }
`;