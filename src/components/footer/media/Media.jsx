import React from "react";
import { MediaStl } from "./media.style";

export const Media = () => {

    return (
        <MediaStl>
            <h2 className='media__heading'>Медиа</h2>
            <ul className='media__list'>
              <li className='media__point'>Блог</li>
              <li className='media__point'>Информация для СМИ</li>
              <li className='media__point'>Правовая информация</li>
            </ul>
        </MediaStl>
    );
}
