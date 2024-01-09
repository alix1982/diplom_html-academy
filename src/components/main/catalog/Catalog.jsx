import React, {useState, useEffect} from "react";
import { CatalogStl } from "./catalog.style";
import { Filter } from "./filter/Filter";
import { Items } from "./items/Items";
import { products } from "../products";

export const Catalog = ({isSizeWindow}) => {
  const [productsSort, setProductsSort] = useState(products);

  const [sliderValue, setSliderValue] = useState([100, 900]);
  const [valueCheked, setValueChecked] = useState('');
  const [values, setValues] = useState({brazil: false, ethiopia: false, colombia: false, costa_rica: false, peru: false});

  const [priceSort, setPriceSort] = useState('');
  const [milkSort, setMilkSort] = useState(false);
  const [regionSort, setRegionSort] = useState('');

  const filterPrice = () => {
    setProductsSort(
      products.filter((product) => product.newPrice !== false ?
        (product.newPrice >= sliderValue[0] && product.newPrice <= sliderValue[1]) :
        (product.price >= sliderValue[0] && product.price <= sliderValue[1])
      )
    );

    setPriceSort(!priceSort);
  }

  const filterMilk = () => {
    valueCheked === 'indifferent' && setProductsSort(productsSort);
    valueCheked === 'noMilk' && setProductsSort(productsSort.filter((product) => product.milk === ''));
    valueCheked === 'animal' && setProductsSort(productsSort.filter((product) => product.milk === 'animal'));
    valueCheked === 'vegetable' && setProductsSort(productsSort.filter((product) => product.milk === 'vegetable'));

    setMilkSort(!milkSort);
  }

  const filterRegion = () => {
    if (values.brazil || values.ethiopia || values.colombia ||values.costa_rica || values.peru) {
      
      const arr = productsSort;
      let arrFinal = [];

      const arrBrazil = values.brazil ? arr.filter(item => item.region === 'Brazil') : [];
      const arrEthiopia = values.ethiopia ? arr.filter(item => item.region === 'Ethiopia') : [];
      const arrColombia = values.colombia ? arr.filter(item => item.region === 'Colombia') : [];
      const arrCosta_Rica = values.costa_rica ? arr.filter(item => item.region === 'Costa_Rica') : [];
      const arrPeru = values.peru ? arr.filter(item => item.region === 'Peru') : [];

      (arrBrazil.length > 0) && (arrFinal = arrFinal.concat(arrBrazil));
      (arrEthiopia.length > 0) && (arrFinal = arrFinal.concat(arrEthiopia));
      (arrColombia.length > 0) && (arrFinal = arrFinal.concat(arrColombia));
      (arrCosta_Rica.length > 0) && (arrFinal = arrFinal.concat(arrCosta_Rica));
      (arrPeru.length > 0) && (arrFinal = arrFinal.concat(arrPeru));

      setProductsSort(arrFinal);
    }

    setRegionSort(!regionSort);
  }

  useEffect(()=>{
    filterPrice()
  },[valueCheked, sliderValue, values]);

  useEffect(()=>{
    filterMilk();
  },[priceSort]);
  
  useEffect(()=>{
    filterRegion()
  },[milkSort]);

  return (
      <CatalogStl id='catalog'>
        <h2 className='catalog__heading'>Каталог</h2>
        <p className='catalog__text'>Каталог кофейных напитков</p>
        <div className='catalog__content'>
          <Filter setValueChecked={setValueChecked} values={values} setValues={setValues} sliderValue={sliderValue} setSliderValue={setSliderValue} />
          <Items isSizeWindow={isSizeWindow} productsSort={productsSort} setProductsSort={setProductsSort}/>
        </div>
      </CatalogStl>
  );
}
