import styled from "styled-components";

export const CommunityHeader = styled.header`
    height: 85px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #383838;

    h1 {
        color: #FFC124;
        font-size: 30px;
        margin-left: 10px;
    }
    
    span {
        width: 80px;
        display: flex;
        justify-content: space-between;
    }
`

export const HeaderButton = styled.button`
    color: #FFC124;
    font-size: 25px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`
