import styled from "styled-components";

export const DivModalAddReview = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: #383838;
    width: 94vw;
    height: 50vh;
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    padding-left: 0 auto;
    padding: 1vh 1vw;
    z-index: 1;

@media screen and (min-width: 423px) {
    width: 60vw;
    margin-left: 20vw;
}

@media screen and (min-width: 800px) {
    width: 30vw;
    margin-left: 30vw;
}
`

export const DivMovieInformation = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right: 4vw;

img{
    width: 100%;
    height: 60%;
    margin-bottom: 2vh;
}

h1{
    color: white;
    font-size: 16px;
    margin-bottom: 2vh;
}

h2{
    color:#FFC124;
    font-size: 20px;
    border: 1px ridge #FFC124;
    padding: 2px;
}
`

export const DivSecondPartModalAddReview = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
padding-top: 0;
flex-direction: column;
width: 50%;
height: 100%;

div{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

h2{
    font-size: 14px;
    color: white;
    margin-right:1%;
}

button{
    border: none;
    background-color:#383838;
}
`

export const FormAddReview = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: flex-start;
padding: 1vh 0vw;

input{
    height: 70%;
    margin-bottom: 1vh;
    width: 90%;
}

label{
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1vh;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
}

select{
    margin-top: 1vh;
    background-color:#383838;
    border: none;
    color: #FFC124;
}

option{
    color:#FFC124;
    margin-bottom: 16px;
}

button{
    background-color: #FFC124;
    color: black;
    height: 15%;
    width: 42%;
    border-radius: 5px;
    font-weight: bold;
}
`