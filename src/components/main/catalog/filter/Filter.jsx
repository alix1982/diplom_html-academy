import React from "react";
import { FilterStl } from "./filter.style";
import { PriceFilter } from "./priceFilter/PriceFilter";
import { MilkFilter } from "./milkFilter/MilkFilter";
import { RegionFilter } from "./regionFilter/RegionFilter";

export const Filter = ({setValueChecked, values, setValues, sliderValue, setSliderValue }) => {

  return (
      <FilterStl>
        <PriceFilter sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <MilkFilter setValueChecked={setValueChecked} />
        <RegionFilter  values={values} setValues={setValues}/>
        <article className='filter__buttons'>
          <button className='filter__buttonSubmit' onClick={()=>{console.log('Click1')}}>Применить</button>
          <buttom className='filter__buttonReset' onClick={()=>{console.log('Click2')}}>Сбросить</buttom>
        </article>
      </FilterStl>
  );
}
