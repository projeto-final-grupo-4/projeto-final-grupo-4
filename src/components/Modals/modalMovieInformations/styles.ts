import styled from "styled-components";

export const DivModalMovieInformations = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    position: fixed;
    z-index: 999;
    flex-direction: column;
    overflow-y: hidden;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);;
`

export const DivScreenMovie = styled.div`
width: 82.5%;
background-color: #000000;
height: 30vh;

@media screen and (min-width: 769px) {
  /* '  margin-top: 20vh;' */
    width: 70%;
    /* height: 50vh; */
    height: fit-content;
}

@media screen and (min-width: 1000px){
    width: 70%;
    /* height: 60vh; */
    height: fit-content;
}
`

export const DivCloseModal = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;

button{
    background-color: #000000;
    border: none;
    margin-top: 1vh;
}
`

export const DivPlay = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
/* height: 20vh; */

@media screen and (min-width: 769px) {
    /* height: 40vh; */
}

@media screen and (min-width: 769px) {
    height: 50vh;
}

iframe{
    width: 100%;
    height: 100%;
}
`

export const DivInformationsMovie = styled.div`
background-color: #383838;
width: 80%;
height: 30vh;
padding: 5px;
overflow: auto;

@media screen and (min-width: 769px) {
    width: 69%;
    height: 23vh;
}

@media screen and (min-width: 1000px){
    width: 69%;
    padding-top: 20px;
    height: fit-content;
    /* height: 15vh; */
}
`

export const DivInformations = styled.div`
display: flex;
flex-direction: column;

h1{
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 2vh;
    margin-right: 2vw;
}

h2{
    color: #FFC124;
    font-size: 20px;
    margin-bottom: 2vh;
    margin-right: 2vw;
    padding: 4px;
    display: flex;
    
@media screen and (min-width: 769px)  {
    border: 1px ridge #FFC124;
}
}

span{
    display: none;

@media screen and (min-width: 769px) {
    display: flex;
}
}
p{
    color: #FFFFFF;
    font-size: 14px;
}
`

export const DivTitleAndRate = styled.div`
display: flex;
justify-content: space-between;
`

export const DivFuncionalities = styled.div`
display: flex;
flex-direction: row;
color: white;
align-items: flex-start;
justify-content: space-between;

label{
    color: #FFC124;
    display: flex;
    justify-content: center;
    align-items: center;
}

span{
    display: none;

@media screen and (min-width: 769px) {
    margin-top: 13px;
    display: flex;
}

}

select{
    background-color:  #383838;
    border: none;
    margin-top: 2vh;
    color: #FFC124;
    font-size: 16px;
}

option{
    color: #FFC124;;
}

button{
    background-color:#383838;
    border: none;
    margin-top: 2vh;
}
`

export const ButtonSeeReviews = styled.button`
background-color:#383838;
border: none;
margin-top: 2vh;
color: #FFC124;
`