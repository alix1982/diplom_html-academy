import styled from 'styled-components';

export const ItemStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(31.35% - 60px);
    background-color: #fff;
    padding: 50px 30px 30px;
    border-radius: 4px;
    box-shadow: 0;
    transition: box-shadow 0.3s linear;
    &:hover {
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
    }
    /* outline: 1px solid red; */

    .item__img {
        width: 130px;
        height: 188px;
        object-fit: contain;
        margin-bottom: 30px;
    }
    .item__heading {
        align-self: flex-start;
        margin: 0;
        margin-bottom: 10px;
        color: #333;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
    }
    .item__text {
        align-self: flex-start;
        margin: 0;
        margin-bottom: 20px;
        color: #333;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .item__buy {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .item__buyPrice {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }
    .item__buyButton {
        display: flex;
        justify-content: space-between;
        gap: 6px;
        padding: 8px 20px;
        border: none;
        border-radius: 4px;
        background: #7859CF;
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        transition: opacity 0.3s linear;
        cursor: pointer;
        &:hover {
            opacity: 0.8;
        }
    }
        
    @media (max-width: 1400px) {
        width: calc(47.94% - 60px);
    }
    @media (max-width: 750px) {
        width: calc(100% - 40px);
        max-width: 320px;
        /* width: calc(31.35% - 40px); */
        padding: 40px 20px 20px;

        .item__img {
            margin-bottom: 24px;
        }
        .item__heading {
            margin-bottom: 4px;
            font-size: 18px;
            line-height: 32px;
        }
        .item__text {
            margin-bottom: 16px;
        }
    }
`;