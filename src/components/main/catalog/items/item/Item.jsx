import React from "react";
import { ItemStl } from "./item.style";
import { ReactComponent as ImgButton } from '../../../../../images/main/catalog/item/imgButton.svg'

export const Item = ({product}) => {

  return (
    <ItemStl>
        <p>{product.milk}</p>
        <p>{product.region}</p>
        <img className='item__img' src={product.imgCatalog} width='130' height='188' alt='фото продукта'/>
        <h2 className='item__heading'>{product.title}</h2>
        <p className='item__text'>{product.textCatalog}</p>
        <div className='item__buy'>
            <p className='item__buyPrice'>{typeof product.newPrice === 'number' ? product.newPrice+'₽' : product.price+'₽'}</p>
            <button className='item__buyButton'>
                <ImgButton />
                В корзину
            </button>    
        </div>
    </ItemStl>
  );
}
