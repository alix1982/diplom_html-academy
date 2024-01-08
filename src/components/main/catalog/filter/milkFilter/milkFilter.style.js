import styled from 'styled-components';

export const MilkFilterStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

    .milkFilter__heading {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .milkFilter__inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }
    .milkFilter__type {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
    }
    .milkFilter__input {
        margin: 0;
        width: 25px;
        height: 25px;
        accent-color: #7859CF;
    }
    .milkFilter__inputText {
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