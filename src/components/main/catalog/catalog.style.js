import styled from 'styled-components';

export const CatalogStl = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: calc(100% - 80px);
    padding: 100px 40px 120px;
    background-color: #F8F8F8;

    .catalog__heading {
        margin: 0;
        margin-bottom: 4px;
        color: #7859CF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.48px;
        text-transform: uppercase;
    }
    .catalog__text {
        margin: 0;
        margin-bottom: 40px;
        color: #333;
        text-align: center;
        font-family: Montserrat;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
    }
    .catalog__content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    @media (max-width: 1400px) {
        width: calc(100% - 40px);
        padding: 80px 20px 120px;

        .catalog__text {
            margin-bottom: 20px;
        }
        .catalog__content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 44px;
        }
    }

    @media (max-width: 750px) {
        padding: 50px 20px 44px;

        .catalog__content {
            gap: 36px;
        }

        .catalog__text {
            font-size: 24px;
            line-height: 36px;
        }

        .catalog__content {
            width: 100%;
            gap: 40px;
        }
    }
`;