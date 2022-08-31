import styled from "styled-components";

export const CommunityHeader = styled.header`
    height: 85px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-2);

    h2 {
        color: var(--yellow);
        font-size: 30px;
        margin-left: 20px;
    }
    
    span {
        width: 80px;
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
    }

    @media (min-width: 500px) {
        h2 {
            margin-left: 60px;
        }

        span {
            margin-right: 60px;
        }
    }
`

export const HeaderButton = styled.button`
    color: var(--yellow);
    font-size: 25px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const HeaderNavigation = styled.div`
    width: 100%;
    
    h2 {
        color: var(--grey-0);
        text-align: center;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header_navigation {
        width: 100%;
        align-items: center;
    }

    .header_navigation nav ul {
        display: flex;
        color: var(--grey-0);
        font-weight: 600;
    }

    .header_navigation nav ul li {
        padding: 5px;
    }

    .header_navigation form input {
        width: 80%;
        border-radius: 5px;
        border: none;
        background-color: var(--grey-1);
    }

    .header_navigation form {
        position: relative;
    }

    .header_navigation form button {
        background-color: transparent;
        border: none;
        position: absolute;
        right: 28px;
        top: 3px;
        cursor: pointer;
    }

    @media (min-width: 650px) {
        display: flex;
        margin-left: 50px;
        justify-content: center;

        .header_navigation {
            display: flex;
            width: 800px;
            margin-top: 10px auto;
            justify-content: center;
            align-items: center;
        }

        span {
            width: 100%;
            justify-content: space-evenly;
        }
    }
`
