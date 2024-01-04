import React from "react";
import { BasketStl } from "./header.style";
import { ReactComponent as BasketIcon } from '../../images/header/basketIcon.svg'

export const Basket = () => {
  return (
      <BasketStl onClick={()=>{console.log('переход в корзину')}}>
        <BasketIcon />
        <p className="basket__text">Корзина</p>
      </BasketStl>
  );
}