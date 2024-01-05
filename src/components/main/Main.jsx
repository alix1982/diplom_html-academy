import React from "react";
import { MainStl } from "./main.style";
import { Slider } from "./slider/Slider";
import { Advantages } from "./advantages/Advantages";
import { Catalog } from "./catalog/Catalog";
import { Maps } from "./maps/Maps";

export const Main = () => {

  return (
      <MainStl>
        <Slider />
        <Advantages />
        <Catalog />
        <Maps/>
      </MainStl>
  );
}
