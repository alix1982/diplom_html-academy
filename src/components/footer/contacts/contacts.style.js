import styled from 'styled-components';

export const ContactsStl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 10px;
    width: 23.3%;

    .contacts__heading {
        margin: 0;
        color: #7859CF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.28px;
    }
    .contacts__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
    .contacts__point {
        display: flex;
        gap: 6px;
    }
    .contacts__pointText {
        width: calc(100% - 19px);
        margin: 0;
        margin-top: -3px;
        color: #333;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
    }

    @media (max-width: 1400px) {
        margin-top: 0;
        width: 30.5%;
    }

    @media (max-width: 750px) {
        /* margin-top: 0; */
        width: 100%;
    }
`;