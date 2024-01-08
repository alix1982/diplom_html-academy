import styled from 'styled-components';

export const StoreStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-top: 10px;
    width: 23.3%;

    .store__heading {
        margin: 0;
        color: #7859CF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.28px;
    }
    .store__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
    .store__point {
        padding: 8px 0;
        color: #333;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.24px;
        text-transform: uppercase;
        transition: opacity 0.5s linear;
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
    }
    .store__link {
        text-decoration: none;
        color: #333;
    }

    @media (max-width: 1400px) {
        margin-top: 0;
        width: 30.5%;
    }

    @media (max-width: 750px) {
        width: 100%;
    }
`;