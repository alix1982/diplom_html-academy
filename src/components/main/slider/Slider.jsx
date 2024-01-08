import React, {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { SliderStl } from "./slider.style";
import { Slide } from "./slide/Slide";
import { products } from "../products";

export const Slider = () => {

    const [productsSortSlider, setProductsSortSlider] = useState(products)
    useEffect(()=>{
        setProductsSortSlider(productsSortSlider.filter((product => product.news)))
    },[])
    
    return (
        <SliderStl id='slider'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                  }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {productsSortSlider.length ? productsSortSlider.map(product =>
                    <SwiperSlide key={product.id}>
                        <Slide product={product}/>
                    </SwiperSlide>
                ) : null
                }
            </Swiper>
        </SliderStl>
    );
}
