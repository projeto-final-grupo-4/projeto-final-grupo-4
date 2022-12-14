import styled from "styled-components";

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 395px;
  height: 502px;
  background: #f0f0f0;
  border-radius: 15px;
  position: relative;

  h1 {
    font-weight: 600;
    font-size: 32px;
  }
  input {
    width: 260px;
    height: 50px;
    background: #d9d9d9;
    margin-top: 40px;
    border-radius: 4px;
    border-style: none;
    padding-left: 10px;
  }
  input::placeholder {
    font-weight: 600;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.2);
    padding-left: 10px;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    color: #383838;
    margin: 5px 0px;
  }

  .eyeButton {
    border: none;
    background-color: transparent;
    color: #000;
    position: absolute;
    top: 288px;
    left: 295px;
    font-size: 17px;
    cursor: pointer;
  }
`;

export const ButtonEnter = styled.button`
  background: #383838;
  font-weight: 600;
  font-size: 16px;
  color: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 116px;
  height: 34px;
  cursor: pointer;
`;

export const ButtonRegister = styled.button`
  background: #f0f0f0;
  border-style: none;
  color: #f2ce0f;
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 14px;
`;
