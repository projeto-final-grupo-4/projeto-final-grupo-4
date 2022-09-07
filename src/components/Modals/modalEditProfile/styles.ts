import styled from "styled-components";

export const DivFormEditProfile = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  position: fixed;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.7);
`;

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

  margin-top: 50px;

  @media screen and (min-width: 472px) {
    width: 320px;
    height: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 400px;
    margin-top: 80px;
  }

  @media screen and (min-width: 1400px) {
    width: 420px;
    height: 500px;
    margin-top: 110px;
  }
`;

export const DivButtonCloseModalEditProfile = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  background-color: red;
  position: relative;
`;

export const ButtonCloseModalEditProfile = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 5px;

  background-color: transparent;
  right: 10px;
  border: none;
  border-radius: 10px 10px 0px 0px;
  svg {
    width: 100%;
    height: 100%;
    color: var(--grey-1);
  }
  &&:active {
    transform: scale(0.98);
    transition: 0.2s;
  }
  &&:hover {
    svg {
      color: var(--yellow);
      transition: 0.2s;
    }
  }
`;

export const H1EditProfile = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 24px;
  padding: 20px;
`;

export const InputEditProfile = styled.input`
  background-color: #d9d9d9;
  width: 80%;
  height: 12%;
  border-radius: 5px;
  padding-left: 3%;
  font-size: 14px;
  border: none;

  &&:focus {
    outline: none;
    transform: scale(1.03);
    transition: 0.5s;

    box-shadow: 0 0 1.5em var(--grey-4);
  }
`;

export const ButtonEditProfile = styled.button`
  background-color: var(--grey-1);
  color: var(--grey-3);
  width: 45%;
  height: 10%;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  border: none;

  &&:hover {
    background-color: var(--yellow);

    transition: 0.2s;
  }
  &&:active {
    transform: scale(0.98);

    transition: 0.2s;
  }
  @media screen and (min-width: 769px) {
    width: 50%;
  }
`;
