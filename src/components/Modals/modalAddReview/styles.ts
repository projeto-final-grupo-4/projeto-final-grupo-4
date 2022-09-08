import styled from "styled-components";

export const BackgroundModal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivModalAddReview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #383838;
  width: 94vw;
  height: 60%;
  font-family: "Montserrat", sans-serif;
  position: fixed;

  padding: 1vh 1vw;
  z-index: 1000;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

export const DivMovieInformation = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 4vw;

  border-right: 2px solid var(--grey-3);

  img {
    width: 60%;
    height: 60%;
    border-radius: 5px;
    margin-top: 5px;
  }

  h4 {
    color: white;
    font-size: 16px;
    margin-bottom: 2vh;
    text-align: center;
    max-width: 90%;
  }

  h5 {
    color: #ffc124;
    font-size: 1rem;
  }
`;

export const DivSecondPartModalAddReview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 0;
  flex-direction: column;
  width: 50%;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  h2 {
    font-size: 14px;
    color: white;
    margin-right: 1%;
  }

  button {
    border: none;
    background-color: transparent;

    svg {
      color: var(--grey-1);
    }
  }
  button:hover > svg {
    color: var(--yellow);
    transition: 0.2s;
  }
  button:active {
    transform: scale(0.98);

    transition: 0.2s;
  }
`;

export const FormAddReview = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  padding: 1vh 0vw;

  textarea {
    height: 70%;
    margin-bottom: 1vh;
    width: 90%;
    border-radius: 5px;
    border: none;
    font-family: "Montserrat", sans-serif;
    resize: none;
  }
  input:focus {
    outline: none;
    transform: scale(1.03);
    transition: 0.5s;

    box-shadow: 0 0 1.5em var(--grey-4);
  }

  label {
    color: white;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1vh;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;

    text-align: center;
  }

  select {
    margin-top: 1vh;
    background-color: #383838;
    border: none;
    color: #ffc124;
  }

  option {
    color: #ffc124;
    margin-bottom: 16px;
  }

  button {
    background-color: var(--grey-1);
    color: black;
    height: 50px;
    width: 30%;
    max-width: 40%;

    border-radius: 5px;
    font-weight: bold;
  }
  button:hover {
    background-color: var(--yellow);

    transition: 0.2s;
  }
`;
