import styled  from 'styled-components'
import button from '../../assets/img/Vector.png'

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 395px;
    height: 602px;  
    background: #F0F0F0;
    border-radius: 15px;
    position: relative;

    h1{
        font-weight: 600;
        font-size: 32px;
    }
    input{
        width: 260px;
        height: 50px;
        background: #D9D9D9;
        margin-top: 20px;
        border-radius: 4px;
        border-style: none;
        padding-left: 10px;
    }
    input::placeholder{
        font-weight: 600;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.2);
        padding-left: 10px;
    }

    h3{
        font-weight: 600;
        font-size: 16px;
        color: #383838;
        margin-bottom: 5px;
    }
    span{
        color: #f10;
        margin-top: 10px;
    }

    .eyeButton {
    border: none;
    background-color: transparent;
    color: #000;
    position: absolute;
    top: 382px;
    left: 295px;
    font-size: 17px;
    cursor: pointer;
    }
`

export const ButtonRegister = styled.button`
    background: #383838;
    font-weight: 600;
    font-size: 16px;
    color: #F0F0F0;
    border-radius: 10px;
    width: 116px;
    height: 34px;
    cursor: pointer;
    margin-top: 40px
`

export const Button = styled.button`
        background: url(${button});
`