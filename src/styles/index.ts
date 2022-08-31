import { createGlobalStyle } from "styled-components"
import Background from '../assets/img/background.png'


export const Global = createGlobalStyle`
    body {
        background: url(${Background});
        display:flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif
    }
`