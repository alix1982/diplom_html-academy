import styled from 'styled-components';

export const PriceFilterStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;

    .priceFilter__heading {
        align-self: flex-start;
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .priceFilter__values {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .priceFilter__value {
        width: calc(134px - 20px);
        height: calc(40px - 16px);
        padding: 8px 10px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        outline: 2px solid #9070EC;
        background: #FFF;
        color: #333;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        cursor: pointer;
    }

    @media (max-width: 1400px) {
        width: 30.5%;

        /* .priceFilter__values {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        } */
        .priceFilter__value {
            width: calc(88px - 20px);
            /* height: calc(40px - 16px); */
            /* padding: 8px 10px; */
            /* margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            outline: 2px solid #9070EC;
            background: #FFF;
            color: #333;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; */
        }
    }

    @media (max-width: 750px) {
        width: 100%;

        .priceFilter__heading {
            align-self: flex-start;
            margin: 0;
        }
        .priceFilter__values {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .priceFilter__value {
            width: calc(42% - 20px);
        }
    }
`;