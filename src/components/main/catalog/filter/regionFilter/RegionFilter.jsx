import React, {useState, useEffect} from "react";
import { RegionFilterStl } from "./regionFilter.style";
import { products } from "../../../products";

export const RegionFilter = () => {
  const [values, setValues] = useState({brazil: false, ethiopia: false, colombia: false, costa_rica: false, peru: false});
  const [isRegion, setIsRegion] = useState({brazil: false, ethiopia: false, colombia: false, costa_rica: false, peru: false});

  useEffect(()=>{
    const isBrazil = (products.find((product)=> product.region === 'Brazil')) ? true : false;
    const isEthiopia = (products.find((product)=> product.region === 'Ethiopia')) ? true : false
    const isColombia = (products.find((product)=> product.region === 'Colombia')) ? true : false;
    const isCosta_Rica = (products.find((product)=> product.region === 'Costa_Rica')) ? true : false;
    const isPeru = (products.find((product)=> product.region === 'Peru')) ? true : false;

    setIsRegion({brazil: isBrazil, ethiopia: isEthiopia, colombia: isColombia, costa_rica: isCosta_Rica, peru: isPeru})
  },[products])

  const handleValues = (e) => {
      // setValues({...{brazil: false, ethiopia: false, colombia: false, costa_rica: false, peru: false}, [e.target.value]: e.target.checked})
      setValues({...values, [e.target.value]: e.target.checked})

  }
  // console.log(values)

  return (
      <RegionFilterStl>
        <h3 className='regionFilter__heading'>Страна произрастания</h3>
        <div className='regionFilter__inputs' onChange={handleValues}>
          <label className='regionFilter__type'>
            <input className='regionFilter__input' type="checkbox" id="brazil" name="region" value="brazil" disabled={!isRegion.brazil}/>
            <span className='regionFilter__customCheckbox'></span>
            <p className='regionFilter__inputText'>Бразилия</p>
          </label>
          <label className='regionFilter__type'>
            <input  className='regionFilter__input' type="checkbox" id="ethiopia" name="region" value="ethiopia" disabled={!isRegion.ethiopia} />
            <span className='regionFilter__customCheckbox'></span>
            <p className='regionFilter__inputText'>Эфиопия</p>
          </label>
          <label className='regionFilter__type'>
            <input  className='regionFilter__input' type="checkbox" id="colombia" name="region" value="colombia" disabled={!isRegion.colombia}/>
            <span className='regionFilter__customCheckbox'></span>
            <p className='regionFilter__inputText'>Колумбия</p>
          </label>
          <label className='regionFilter__type'>
            <input  className='regionFilter__input' type="checkbox" id="costa_rica" name="region" value="costa_rica" disabled={!isRegion.costa_rica}/>
            <span className='regionFilter__customCheckbox'></span>
            <p className='regionFilter__inputText'>Коста-Рика</p>
          </label>
          <label className='regionFilter__type'>
            <input  className='regionFilter__input' type="checkbox" id="peru" name="region" value="peru" disabled={!isRegion.peru}/>
            <span className='regionFilter__customCheckbox'></span>
            <p className='regionFilter__inputText'>Перу</p>
          </label>
        </div>
      </RegionFilterStl>
  );
}
