import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { SliderStl } from "./slider.style";
import { Slide } from "./slide/Slide";
import { products } from "../../../constants";
// import imgDecaf from '../../../images/main/slider/flat_white_img.png';
// import {ReactComponent as LeftArrow} from '../../../images/main/slider/leftArrow.svg';
// import {ReactComponent as RightArrow} from '../../../images/main/slider/rightArrow.svg';

export const Slider = () => {

    return (
        <SliderStl>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {products.length ? products.map(product =>
                    <SwiperSlide key={product.id}>
                        <Slide product={product}/>
                    </SwiperSlide>
                ) : null
                }
            </Swiper>
        </SliderStl>
    );
}
