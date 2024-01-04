import styled from 'styled-components';
// import { Swiper } from "swiper/react";
// import Button from "/src/components/ui/button/button";
// import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";
// import leftArrow from '../../../images/main/slider/leftArrow.svg';
// import rightArrow from '../../../images/main/slider/rightArrow.svg';

export const SlideStl = styled.article`
    width: 100%;
    display: flex;

    .slide__img {
        width: 41.667vw;
        height: 41.667vw;
        object-fit: cover;
        margin: 30px 30px 84px 105px;
    }
    .slide__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
    }
    .slide__news {
        margin: 10px 10px 4px 0;
        color: #7859CF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.48px;
        text-transform: uppercase;
    }
    .slide__heading {
        margin: 0;
        margin-bottom: 16px;
        width: calc(100% - 80px);
        margin-right: 80px;
        color: #333;
        font-family: Montserrat;
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: 80px;
        letter-spacing: 1.12px;
    }
    .slide__text {
        margin: 0;
        width: calc(100% - 80px);
        margin-right: 80px;
        color: #333;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
    }
    .slide__buy {
        display: flex;
        align-items: center;
        gap: 6px;
        margin: 40px 0 10px;
    }
    .slide__buyPrice {
        margin: 0;
        color: #7859CF;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
        text-decoration: line-through;
    }
    .slide__buyNewPrice {
        margin: 0;
        margin-right: 14px;
        color: #333;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
    }
    .slide__buyButton {
        height: 40px;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border: none;
        border-radius: 4px;
        background: #7859CF;
        padding: 8px 20px;
    }

    @media (max-width: 1400px) {
       flex-direction: column-reverse;
       align-items: center;
       .slide__img {
            margin: 0;
        }

       .slide__news {
            margin: 60px auto 4px auto;
        }
        .slide__heading {
            margin: 0 auto 16px auto;
            width: 100%;
            text-align: center;
        }
        .slide__text {
            margin: 0 80px 20px 80px;
            width: calc(100% - 160px);
            text-align: center;
        }
        .slide__buy {
            margin: 0 auto 20px;
        }
    }

    @media (max-width: 800px) {
        .slide__img {
            width: 62vw;
            height: 62vw;
            margin: 0;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        .slide__img {
            margin: 20px;
        }
        .slide__news {
            margin: 0 auto 4px auto;
            text-align: center;
        }
        .slide__heading {
            margin: 0 20px 10px;
            width: calc(100% - 40px);
            font-size: 36px;
            line-height: 48px;
            letter-spacing: 0.72px;
        }
        .slide__text {
            margin: 0 20px 20px;
            width: calc(100% - 40px);
            font-size: 14px;
            line-height: 20px;
        }
        .slide__buy {
            margin: 0 auto 60px;
        }
    }

    @media (max-width: 400px) {
        .slide__img {
            width: 87.5vw;
            height: 87.5vw;
        }
    }
`;