import styled from "styled-components";
import Background from '../../assets/img/background2.png'
import Background2 from '../../assets/img/background.png'

export const DivBackground = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${Background});
    align-items: center;
    height: 100vh;

    @media (max-width: 769px){
        background-image: url(${Background2});
        height: 100vh
    }
`