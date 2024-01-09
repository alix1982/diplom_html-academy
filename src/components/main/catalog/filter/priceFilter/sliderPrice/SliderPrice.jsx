import React from "react";
import { SliderPriceStl } from "./sliderPrice.stule";
import {
  // Typography,
  Slider,
  Box
} from '@mui/material';

export const SliderPrice = ({sliderValue, setSliderValue}) => {

//   const [sliderValue, setSliderValue] = useState([0, 900]); // количество значений в массиве = количеству ползунков
  // const [sliderValue2, setSliderValue2] = useState([10, 80, 90]); //если нужно второй независимый слайдер, если одинаквые слайдеры то тот же стейт

  // const marks = [
  //   {value: 20, label: '200₽'},
  //   {value: 40, label: '400₽'},
  //   {value: 60, label: '600₽'},
  //   {value: 80, label: '800₽'},
  // ]

  return (
      <SliderPriceStl>
        <Box>
          {/* задание заголовка слайдера и его стилей */}
          {/* <Typography variant="h5" color='orange' align="center">
            InputRange
          </Typography> */}
          <Slider
            value={sliderValue}
            onChange={(e, newValue) => {setSliderValue(newValue)}}
            // valueLabelDisplay="auto"
            step={10}
            color="secondary"
            // marks={marks}
            size="large"
            // установка максимального значения слайдера
            max={1000}
          />

          {/* Второй слайдер с теми же значениями или независимыми в зависимости от стейта */}
          {/* <Slider
            value={sliderValue2}
            onChange={(e, newValue) => {setSliderValue2(newValue)}}
            // вывод подписи маркера on-постоянно, либо auto когда ползунок активен
            valueLabelDisplay="auto"
            // шаг слайдера
            step={10}
            // кастомный цвет, значения ограничены цветами библиотеки (можно через стили)
            color="secondary"
            // метки просто пустые в зависимости от шага, либо с подписями при использовании массива меток - marks строка 11
            marks
            // размер слайдера large - small
            size="small"
          /> */}

          {/* получение значений слайдера */}
          {/* Value1: {sliderValue[0]} Value2: {sliderValue[1]} Value3: {sliderValue[2]} */}
          {/* Value1: {sliderValue2[0]} Value2: {sliderValue2[1]} Value3: {sliderValue2[2]} */}
        </Box>
      </SliderPriceStl>
  );
}
