import React from "react";
import { FilterStl } from "./filter.style";
import { PriceFilter } from "./priceFilter/PriceFilter";
import { MilkFilter } from "./milkFilter/MilkFilter";
import { RegionFilter } from "./regionFilter/RegionFilter";

export const Filter = () => {

  return (
      <FilterStl>
        <PriceFilter />
        <MilkFilter />
        <RegionFilter />
        <article className='filter__buttons'>
          <button className='filter__buttonSubmit' onClick={()=>{console.log('Click1')}}>Применить</button>
          <buttom className='filter__buttonReset' onClick={()=>{console.log('Click2')}}>Сбросить</buttom>
        </article>
      </FilterStl>
  );
}
