import styled from 'styled-components';

export const FilterStl = styled.section`
    width: 23.38%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
    flex-wrap: wrap;

    .filter__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;
    }
    .filter__buttonSubmit {
        width: 100%;
        border: none;
        border-radius: 4px;
        background: #7859CF;
        padding: 8px 20px;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }
    .filter__buttonReset {
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        background: #FFF;
        padding: 8px 20px;
        color: #7859CF;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
    }

    @media (max-width: 1400px) {
        width: 100%;
        flex-direction: row;
        gap: 40px 30px;

        .filter__buttonSubmit {
            width: max-content;
        }
        .filter__buttonReset {
            box-sizing: content-box;
            width: max-content;

        }
    }

    @media (max-width: 750px) {
        /* flex-direction: column; */
        gap: 30px;
        justify-content: space-between;

        .filter__buttons {
            flex-direction: column;
        }
        .filter__buttonSubmit {
            width: 100%;
            max-width: 280px;
        }
        .filter__buttonReset {
            width: 100%;
            max-width: 280px;
            box-sizing: border-box;
        }
    }
`;