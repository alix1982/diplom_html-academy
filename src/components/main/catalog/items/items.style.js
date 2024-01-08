import styled from 'styled-components';

export const ItemsStl = styled.section`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    width: 74.34%;

    .items__sort {
        width: 100%;
        /* margin: 0; */
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .items__text {
        margin: 0;
        color: #333;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .items__select {
        border: none;
        background-color: transparent;
        color: #7859CF;
        text-align: right;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
    }
    .items__select:focus {
        outline: none
    }
    // стили для контейнера пагинации (карточек, пагинации и поисковой строки)
    .MuiContainer-root {
        padding: 0;
    }
    // стили для стека пагинации (карточек и пагинации)
    .MuiStack-root {
        justify-content: center;
        gap: 30px;
    }
    // стили всей пагинации
    .MuiPagination-root {
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: flex-end;
    }
    // стили для списка с элементами пагинации
    .MuiPagination-ul {
        gap: 20px;
    }
    // стили для элементов списка пагинации
    .MuiPagination-ul>li {
      
    }
    // стили для кнопок страниц
    .MuiButtonBase-root {
        min-width: 40px;
        width: max-content;
        height: 40px;
        margin: 0;
        padding: 8px;
        background-color: #fff;
        color: #7859CF;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        /* transition: all 5s linear; */
    }
    // отступы на кнопоках навигации (вместо стрелок)
    .MuiPaginationItem-previousNext {
        padding: 8px 20px;
    }
    // добавляем текст к кнопкам навигации вместо стрелок
    li>.MuiPaginationItem-previousNext::before {
        content: 'Назад';
    }
    // добавляем текст к кнопкам навигации вместо стрелок
    li+li>.MuiPaginationItem-previousNext::before {
        content: 'Вперед';
    }
    // убираем выделение активной страницы стоящее по-умолчанию
    .Mui-selected {
        /* background-color: transparent!important; */
        color: #333;
        font-weight: 600;
    }
    // убираем стрелку стоящую по-умолчанию
    .MuiSvgIcon-root {
        display: none;
    }

    @media (max-width: 1400px) {
        width: 100%;
    }

    @media (max-width: 1399px) {

        // прячем элемент с тремя точками
        .MuiPaginationItem-ellipsis {
            display: none;
        }
        // убираем гэп и вместо этого добавлеям отступ чтобы исключить лишний отступ из-за пустого элемента с тремя точками
        .MuiPagination-ul {
            gap: 0;
        }
        //прячем 1-ю страницу при активной 3-ей
        .MuiPagination-ul>li:nth-child(2) {
            display: ${props=> props.pageFirst ? 'none' : ''};
        }
        //прячем последнюю страницу при активной предпредпоследней
        .MuiPagination-ul>li:nth-last-child(2) {
            display: ${props=> props.pageLast ? 'none' : ''};
            /* border: ${props=> props.pageLast ? '1px solid red' : '1px solid green'}; */
        }
        // убираем гэп и вместо этого добавлеям отступ чтобы исключить лишний отступ из-за пустого элемента с тремя точками
        .MuiButtonBase-root {
            margin-right: 20px;
            /* min-width: 40px;
            width: max-content;
            height: 40px;
            margin: 0;
            padding: 8px;
            background-color: #fff;
            color: #7859CF;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; */
        }
        //прячем 1-ю страницу при активной 3-ей
        .MuiPagination-ul>li:last-child>.MuiButtonBase-root {
            margin-right: 0;
        }
    }

    @media (max-width: 500px) {
        // отступы на кнопоках навигации (вместо стрелок)
        .MuiPaginationItem-previousNext {
            padding: 8px;
        }
        // добавляем текст к кнопкам навигации вместо стрелок
        li>.MuiPaginationItem-previousNext::before {
            content: '<';
        }
        // добавляем текст к кнопкам навигации вместо стрелок
        li+li>.MuiPaginationItem-previousNext::before {
            content: '>';
        }
    }
`;