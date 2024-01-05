import React from "react";
import { AdvantageStl } from "./advantage.style";

export const Advantage = ({advantage}) => {

  return (
      <AdvantageStl>
        {advantage.img}
        <h2 className='advantage__heading'>{advantage.title}</h2>
        <p className='advantage__text'>{advantage.text}</p>
      </AdvantageStl>
  );
}