import React from "react";
import { StoreStl } from "./store.style";

export const Store = () => {

    return (
        <StoreStl>
            <h2 className='store__heading'>Интернет-магазин</h2>
            <ul className='store__list'>
                <li className='store__point'>
                    <a className="store__link" href="#catalog">
                        Каталог
                    </a>
                </li>
                <li className='store__point'>
                    <a className="store__link" href="#maps">
                        Доставка
                    </a>
                </li>
                <li className='store__point'>
                    <a className="store__link" href="#catalog">
                        Способы оплаты
                    </a>
                </li>
                <li className='store__point'>
                    <a className="store__link" href="#advantages">
                        О нас
                    </a>
                </li>
            </ul>
        </StoreStl>
    );
}
