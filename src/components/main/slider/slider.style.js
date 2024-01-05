import styled from 'styled-components';
import leftArrow from '../../../images/main/slider/leftArrow.svg';
import rightArrow from '../../../images/main/slider/rightArrow.svg';

export const SliderStl = styled.section`
    width: 100%;

    .swiper {
        width: 100%;
        height: 100%;
    }
    .swiper-wrapper {
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .swiper-slide::before {
        content: '';
        align-self: flex-start;
        position: absolute;
        width: 100%;
        height: 100%;
        background: #F3EBE1;
        z-index: -1;
    }
    
    // стрелки слайдера
    .swiper-button-next {
        width: 20px;
        height: 20px;
        background-image: url(${rightArrow});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .swiper-button-next::after {
        content: '';
    }
    .swiper-button-prev {
        width: 20px;
        height: 20px;
        background-image: url(${leftArrow});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
    .swiper-button-prev::after {
        content: '';
    }

    //пагинация
    .swiper-pagination {
        bottom: 70px;
    }
    .swiper-pagination-bullet {
        width: 62px;
        height: 4px;
        background-color: #ffffff;
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        background-color: #7859CF;
    }

    @media (max-width: 1400px) {
        .swiper {
            width: 100%;
        }
        .swiper-slide::before {
            height: 77%;
        }
        .swiper-pagination {
            display: none;
        }
    }

    @media (max-width: 600px) {
        .swiper-slide::before {
            height: 100%;
        }
    }
`;