import React from "react";
import { CatalogStl } from "./catalog.style";
import { Filter } from "./filter/Filter";
import { Items } from "./items/Items";

export const Catalog = ({isSizeWindow}) => {

  return (
      <CatalogStl id='catalog'>
        <h2 className='catalog__heading'>Каталог</h2>
        <p className='catalog__text'>Каталог кофейных напитков</p>
        <div className='catalog__content'>
          <Filter/>
          <Items isSizeWindow={isSizeWindow}/>
        </div>
      </CatalogStl>
  );
}
