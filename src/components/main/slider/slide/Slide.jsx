import React from "react";
import { SlideStl } from "./slide.style";
// import imgDecaf from '../../../../images/main/slider/flat_white_img.png';

export const Slide = ({product}) => {
    // console.log(product)
  return (
      <SlideStl>
        <img className='slide__img' src={product.img} width='280' height='280' alt='фото продукта'/>
        <div className='slide__content'>
            <h1 className='slide__news'>{product.news ? 'Новинка!' : ''}</h1>
            <h2 className='slide__heading'>{product.title}</h2>
            <p className='slide__text'>{product.text}</p>
            <div className='slide__buy'>
                <p className='slide__buyPrice'>{typeof product.newPrice === 'string' ? product.price : ''}</p>
                <p className='slide__buyNewPrice'>{typeof product.newPrice === 'string' ? product.newPrice : product.price}</p>
                <button className='slide__buyButton'>Заказать</button>    
            </div>
        </div>
      </SlideStl>
  );
}