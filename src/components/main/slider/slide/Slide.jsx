import React from "react";
import { SlideStl } from "./slide.style";

export const Slide = ({product}) => {

    const handleRequest = () => {
      window.location.replace('#catalog');
      console.log('ok')
    }
  return (
      <SlideStl>
        <img className='slide__img' src={product.imgSlider} width='280' height='280' alt='фото продукта'/>
        <div className='slide__content'>
            <h1 className='slide__news'>{product.news ? 'Новинка!' : ''}</h1>
            <h2 className='slide__heading'>{product.title}</h2>
            <p className='slide__text'>{product.textSlider}</p>
            <div className='slide__buy'>
                <p className='slide__buyPrice'>{typeof product.newPrice === 'number' ? product.price+'₽'  : ''}</p>
                <p className='slide__buyNewPrice'>{typeof product.newPrice === 'number' ? product.newPrice+'₽' : product.price+'₽'}</p>
                <button className='slide__buyButton' onClick={handleRequest}>Заказать</button>    
            </div>
        </div>
      </SlideStl>
  );
}