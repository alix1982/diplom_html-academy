import styled from 'styled-components';

export const AdvantageStl = styled.li`
    max-width: 317px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .advantage__heading {
        margin: 0;
        margin-top: 10px;
        color: #333;
        text-align: center;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
    }
    .advantage__text {
        margin: 0;
        color: #333;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    @media (max-width: 1000px) {
        max-width: 340px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 10px 20px;

        .advantage__heading {
            margin: 0;
            height: 36px;
            text-align: left;
        }
        .advantage__text {
            margin-left: 72px;
            text-align: left;
            margin-top: -25px;
        }
    }

    @media (max-width: 600px) {
        max-width: 317px;
        min-width: 280px;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        gap: 4px;

        .advantage__heading {
            margin: 0;
            margin-top: 6px;
            /* height: 36px; */
            text-align: center;
            font-size: 18px;
            line-height: 32px;
        }
        .advantage__text {
            text-align: center;
            margin: 0;
            font-size: 14px;
            line-height: 20px;
        }
    }
`;