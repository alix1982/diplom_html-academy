import styled from 'styled-components';

export const MainStl = styled.main`
    display: flex;
    align-items: center;
    width: 100%;
    /* width: calc(100% - 20px); */
    /* margin-left: 20px; */
    /* @media (min-width: 600px) {
        width: calc(100% - 40px);
        margin: 0 20px;
    }
    @media (min-width: 1400px) {
        width: calc(100% - 80px);
        margin: 0 40px;
    } */

    .todoForm__inputName, .todoForm__inputText {
        height: 20px;
        border-radius: 10px;
        margin: 0;
        margin-bottom: 5px;
        padding: 5px 10px;
        transition: opacity 0.5s linear;
        cursor: pointer;
    }

    .todoForm__inputName:hover, .todoForm__inputText:hover {
        opacity: 0.6;
    }

    .todoForm__buttonSubmit, .todoForm__buttonCancel {
        width: 35%;
        height: 25px;
        border-radius: 10px;
        transition: opacity 0.5s linear;
        cursor: pointer;
        @media (max-width: 750px) {
            width: 45%;
        }
    }
`;