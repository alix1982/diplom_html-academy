import React, {useState} from "react";
import { PriceFilterStl } from "./priceFilter.style";
import { SliderPrice } from "./sliderPrice/SliderPrice";
import { ReactComponent as Dash } from '../../../../../images/main/catalog/filter/dash.svg';

export const PriceFilter = () => {

  const [sliderValue, setSliderValue] = useState([100, 900]);

  return (
      <PriceFilterStl>
        <h3 className='priceFilter__heading'>Цена</h3>
        <SliderPrice sliderValue={sliderValue} setSliderValue={setSliderValue}/>
        <div className='priceFilter__values'>
          <p className='priceFilter__value'>{sliderValue[0]}</p>
          <Dash />
          <p className='priceFilter__value'>{sliderValue[1]}</p>
        </div>
        
      </PriceFilterStl>
  );
}
