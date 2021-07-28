import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;
        @media screen and (max-width: 800px){
            padding: 10px;
        }
        background-color: rgb(28, 5, 58);
        color: rgb(242, 242, 242);
    }
    a {
        text-decoration: none;
    }

`