import React from "react";
import { AdvantagesStl } from "./advantages.style";
import { advantages } from "../advantages";
import { Advantage } from "./advantage/Advantage";

export const Advantages = () => {

  return (
      <AdvantagesStl id="advantages">
        <h1 className='advantages__heading'>Преимущества</h1>
        <p className='advantages__text'>Главные причины выбрать Drink2Go</p>
        <ul className='advantages__list'>
            {advantages.length > 0 && advantages.map((advantage)=>
                <Advantage advantage={advantage} key={advantage.id}/>
            )}    
        </ul>
        
      </AdvantagesStl>
  );
}