import styled from 'styled-components';

export const AdvantagesStl = styled.section`
    width: calc(100% - 80px);
    margin: 100px 40px;

    .advantages__heading {
        margin: 0;
        color: #7859CF;
        text-align: center;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0.48px;
        text-transform: uppercase;
    }
    .advantages__text {
        margin: 4px auto 80px auto;
        color: #333;
        text-align: center;
        font-family: Montserrat;
        font-size: 42px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
    }
    .advantages__list {
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 30px;
    }

    @media (max-width: 1000px) {
        width: calc(100% - 60px);
        margin: 60px 30px 100px;

        .advantages__text {
            margin: 4px auto 60px auto;
        }
        .advantages__list {
            gap: 50px 30px;
        }
    }

    @media (max-width: 600px) {
        width: calc(100% - 40px);
        margin: 50px 20px 60px;

        .advantages__text {
            margin: 4px auto 36px auto;
            font-size: 24px;
            line-height: 36px;
        }
        .advantages__list {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }
    }
`;

