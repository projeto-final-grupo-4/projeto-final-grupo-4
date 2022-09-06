import styled from "styled-components";

export const CommunityHeader = styled.header`
  background-color: var(--grey-2);
  width: 100%;

  position: fixed;
  z-index: 998;
`; //Alteirei o tamanho para o componente não bugar!! ass: joão

export const HeaderButton = styled.button`
  color: var(--yellow);
  font-size: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const HeaderNavigation = styled.div`
  padding-top: 80px; //Adicionei um padding para o header ficar fixo!! ass: joão

  width: 100vw;

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

  .header_navigation nav ul li button {
    background-color: transparent;
    border: none;
    color: var(--grey-0);
    font-weight: 600;
    font-size: 17px;
    padding: 0px;
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
    justify-content: center;

    .header_navigation {
      display: flex;
      width: 800px;
      margin-top: 10px auto;
      justify-content: center;
      align-items: center;
    }

    .header_navigation form input {
      padding: 5px;
    }

    .header_navigation form button {
      right: 24px;
      top: 6px;
    }

    span {
      width: 100%;
      justify-content: space-evenly;
    }
  }
`;

export const MainContent = styled.main`
  .divLoading {
    color: var(--yellow);
    font-size: 25px;
    font-weight: 600;
  }

  ul li {
    background-color: var(--grey-2);
    width: 90%;
    height: 292px;
    border-radius: 10px;
    margin: 10px;
  }

  ul li .mediaInfo {
    display: flex;
    justify-content: space-between;
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 600;
  }

  ul li .mediaInfo img {
    width: 48px;
    height: 74px;
    margin: 10px;
    border: solid 1px #fff;
    border-radius: 10px;
  }

  ul li .mediaInfo .sinopse {
    display: none;
  }

  ul li .mediaInfo p {
    margin-right: 10px;
  }

  ul li .userInfo {
    display: flex;
    flex-direction: column;
    margin: 10px;
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 600;
  }

  ul li .userInfo .userData {
    display: flex;
    align-items: center;
  }

  ul li .userInfo img {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 1px #fff;
  }

  ul li .content {
    margin: 10px;
  }

  ul li .rateButton {
    display: flex;
    margin: 10px;
    justify-content: space-between;
  }

  ul li span button {
    background-color: transparent;
    border: none;
    color: var(--yellow);
  }

  @media (min-width: 650px) {
    ul {
      width: 100%;
      max-width: 1400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    ul li {
      display: flex;
      flex-direction: row-reverse;
    }

    ul li .mediaInfo {
      max-width: 500px;
      display: flex;
      flex-direction: row-reverse;
      padding-left: 20px;
      border-left: solid 1px var(--grey-3);
    }

    ul li .mediaInfo img {
      height: 90%;
      width: 160px;
    }

    ul li .mediaInfo .sinopse {
      display: inline;
    }

    ul li .userInfo {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

export const DetailsCategory = styled.div`
  position: relative;
  cursor: pointer;

  :hover {
    color: var(--yellow);
  }

  .details_category {
    height: 300px;
    width: 175px;

    background-color: var(--grey-2);
    color: var(--grey-4);

    border-radius: 8px;
    border: 1px solid var(--yellow);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 35px;
    z-index: 999;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    /* display: none; */
  }
 
  .category {
    background-color: transparent;
    width: 100px;
    height: 20px;
  }
  .category:hover + .details_category {
    visibility: visible;
    z-index: 999;

    opacity: 1;
  }
  .details_category:hover {
    visibility: visible;
    z-index: 999;
    opacity: 1;
  }

  nav {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  nav ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    font-weight: 500;
    font-size: 1rem;
  }
  nav ul li {
    color: var(--grey-0);
    cursor: pointer;
  }
  nav ul li:hover {
    color: var(--yellow);
    transition: 0.2s;
  }

  @media (min-width: 425px) {
    .details_category {
      height: 300px;
      top: 45px;
    }
  }
  @media (min-width: 768px) {
    .details_category {
      height: 300px;
      top: 20px;
    }

    .category {
      margin-top: 2px;
    }
  }
`;
