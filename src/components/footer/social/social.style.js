import styled from 'styled-components';

export const SocialStl = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 23.28%;

    .social__text {
        margin: 10px 0 50px;
        color: #333;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }
    .social__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;
    }
    .social__point {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        transition: opacity 0.5s linear;
        cursor: pointer;
        &:hover {
            opacity: 0.6;
        }
    }

    @media (max-width: 1400px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;