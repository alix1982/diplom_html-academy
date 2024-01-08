import styled from 'styled-components';
import checkbox from '../../../../../images/main/catalog/filter/checkbox.svg';
import checkboxActive from '../../../../../images/main/catalog/filter/checkboxActive.svg';
import checkboxDisabled from '../../../../../images/main/catalog/filter/checkboxDisabled.svg';

export const RegionFilterStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

    .regionFilter__heading {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .regionFilter__inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    .regionFilter__type {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }

    /* кастомный чекбокс */
    .regionFilter__input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .regionFilter__input+.regionFilter__customCheckbox {
        content: '';
        width: 42px;
        height: 24px;
        background-image: url(${checkbox});
        transition: background-image 0.2s linear;
    }
    .regionFilter__input:checked+.regionFilter__customCheckbox {
        background-image: url(${checkboxActive});
    }
    .regionFilter__input:disabled+.regionFilter__customCheckbox {
        background-image: url(${checkboxDisabled});
    }
    //

    .regionFilter__inputText {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    @media (max-width: 1400px) {
        width: 30.5%;
    }

    @media (max-width: 750px) {
        width: max-content;
    }
`;