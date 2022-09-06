import styled from "styled-components";

export const DivFormEditProfile = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    z-index: 1;
`

export const FormEditProfile = styled.form`
    width: 90vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: #383838;
    padding-bottom: 2vh;

@media screen and (min-width: 472px) {
    width: 320px;
    height: 400px;
}

@media screen and (min-width: 769px) {
    width: 320px;
    height: 400px;
}

@media screen and (min-width: 1400px){
    width: 420px;
    height: 500px;
}
`

export const DivButtonCloseModalEditProfile = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
`

export const ButtonCloseModalEditProfile = styled.button`
    background-color: #383838;
    border: none;
`

export const H1EditProfile = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 24px;
`

export const InputEditProfile = styled.input`
    background-color: #D9D9D9;
    width: 80%;
    height: 12%;
    border-radius: 5px;
    padding-left: 3%;
    font-size: 14px;
    border: none;
`

export const ButtonEditProfile = styled.button`
    background-color: #FFC124;
    color: #151515;
    width: 45%;
    height: 10%;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    border: none;

@media screen and (min-width: 769px) {
    width: 50%;
}
`