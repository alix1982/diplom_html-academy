import React, {useState, useEffect} from "react";
import { MilkFilterStl } from "./milkFilter.style";
import { products } from "../../../products";

export const MilkFilter = () => {
  // const [valueCheked, setValueChecked] = useState({})
  const [valueCheked, setValueChecked] = useState('')

  const [isMilk, setIsMilk] = useState({milk: false, animal: false, vegetable: false})

  useEffect(()=>{
    const isMilk = (products.find((product)=> product.milk.length > 0)) ? true : false;
    const isAnimal = (products.find((product)=> product.milk === 'animal')) ? true : false;
    const isVegetable = (products.find((product)=> product.milk === 'vegetable')) ? true : false;
    setIsMilk({milk: isMilk, animal: isAnimal, vegetable: isVegetable});
  },[products])

    const handleValueChecked = (e) => {
        // setValueChecked({[e.target.value]: e.target.checked})
        setValueChecked(e.target.value)
    }
    // console.log(valueCheked)

  return (
      <MilkFilterStl>
        <h3 className='milkFilter__heading'>Наличие молока</h3>
        <div className='milkFilter__inputs' onChange={handleValueChecked}>
          <label className='milkFilter__type'>
            <input className='milkFilter__input' type="radio" id="indifferent" name="milk" value="indifferent"/>
            <p className='milkFilter__inputText'>Неважно</p>
          </label>
          <label className='milkFilter__type'>
            <input  className='milkFilter__input' type="radio" id="animal" name="milk" value="animal" disabled={!isMilk.animal} />
            <p className='milkFilter__inputText'>Только животное</p>
          </label>
          <label className='milkFilter__type'>
            <input  className='milkFilter__input' type="radio" id="vegetable" name="milk" value="vegetable" disabled={!isMilk.vegetable}/>
            <p className='milkFilter__inputText'>Только растительное</p>
          </label>
          <label className='milkFilter__type'>
            <input  className='milkFilter__input' type="radio" id="noMilk" name="milk" value="noMilk" disabled={!isMilk.milk}/>
            <p className='milkFilter__inputText'>Без молока</p>
          </label>
        </div>
      </MilkFilterStl>
  );
}
