import styled from 'styled-components';

export const FooterStl = styled.section`
    display: flex;
    gap: 20px 30px;
    flex-direction: row;
    /* align-items: flex-start; */
    margin: 40px;
    flex-wrap: wrap;

    .footer__line {
        display: none;
    }
    .footer__link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        width: 100%;
        text-decoration: none;
        color: #BDBDBD;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
    }

    @media (max-width: 1400px) {
        margin: 40px 20px;
        gap: 30px;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        /* align-items: center; */
        margin: 20px 20px 30px;
        gap: 20px;

        .footer__line {
            display: inline-block;
            width: 100%;
            border-bottom: 1px solid #F0EBFF ;
        }
    }
`;