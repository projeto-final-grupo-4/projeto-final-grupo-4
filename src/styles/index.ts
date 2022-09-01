
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        //yellow
        --yellow: #FFC124;

        //gray scale pallete
        --grey-4: #151515;
        --grey-3:#212121;
        --grey-2: #383838;
        --grey-1: #D9D9D9;
        --grey-0: #F0F0F0;

        //feedback pallete
        --sucess: #18C051;
        --negative: #C01818;
    }
        body {
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: var(--grey-3);
        font-family: 'Montserrat', sans-serif;

    }

    button{
        cursor: pointer;
    }
    ol, ul, li {
	list-style: none;
    margin: 0;
	padding: 0;
	border: 0;
    }
`;

export default GlobalStyle;

