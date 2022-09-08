import styled from "styled-components";

export const DashboardHeaderStyled = styled.div`
  background-color: var(--grey-2);
  color: var(--yellow);
  margin: 0 auto;

  height: 70px;
  width: 90%;
  max-width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  #header_logo {
    display: flex;
    align-items: center;

    width: 200px;
    height: 200px;
  }
  #header_logo img {
    width: 100px;
    height: 50px;
  }

  #header_user {
    width: 100px;
    display: flex;
    justify-content: end;
    gap: 20px;

    svg {
      width: 30px;
      height: 30px;

      cursor: pointer;
    }
    a {
      color: var(--yellow);
    }
  }
`;

export const Details = styled.div`
  .details {
    height: 200px;
    width: 175px;

    background-color: var(--yellow);
    color: var(--grey-4);

    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 60px;
    right: -20px;

    z-index: 999;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;
    /* display: none; */
  }
  .details::before {
    content: "";
    border-style: solid;
    border-width: 20px 17px 0 17px;
    border-color: var(--yellow) transparent;
    transform: rotate(180deg);
    position: absolute;
    top: -10px;
    right: 18px;
  }
  .user_icon {
    /* background-color: red; */
  }
  .user_icon:hover + .details {
    visibility: visible;
    z-index: 999;

    opacity: 1;
  }
  .details:hover {
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
    justify-content: space-between;
  }
  nav ul {
    height: 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    font-weight: 500;
    font-size: 1rem;
  }
  nav ul li {
    cursor: pointer;
  }
`;
