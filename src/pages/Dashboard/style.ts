import styled from "styled-components";

export const DashboardStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey-3);
  header {
    background-color: var(--grey-2);
    width: 100%;

    position: fixed;
    z-index: 998;
  }
`;

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
  }
`;

export const Details = styled.div`
  details > summary::-webkit-details-marker {
  }
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
    right: 10px;

    z-index: 999;
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
export const DashboardSubHeaderStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 46px;

  background-color: var(--grey-4);
  color: var(--grey-0);

  display: flex;
  div {
    margin: 0 auto;
    width: 90%;
    max-width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  div nav {
    /* background-color: yellow; */
    width: 100%;
    display: flex;
    align-items: center;
  }
  div nav > ul {
    /* background-color: red; */
    width: 50%;
    font-size: 0.8rem;
    font-weight: 500;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    z-index: 2;
  }
  div nav > ul li {
    cursor: pointer;
  }

  div form {
    /* background-color: blue; */
    display: flex;
    max-width: 60%;
    flex: row;
    justify-content: flex-end;
    align-items: center;
  }
  div form input {
    height: 28px;
    width: 70%;
    border-radius: 8px 0px 0px 8px;
    border: none;
    background-color: var(--grey-0);
    /* max-width: 20%; */
    /* display: none; */
  }
  div form button {
    height: 30px;
    border: none;
    border-radius: 0px 8px 8px 0px;
    text-align: center;

    background-color: var(--yellow);
  }

  @media (min-width: 425px) {
    div form input {
      width: 130px;
    }
    div nav > ul {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    div form input {
      width: 200px;
    }
    div form button {
      width: 30px;
    }
  }
  @media (min-width: 1024px) {
    div form input {
      width: 280px;
    }
    div form button {
      width: 40px;
    }
  }
`;

export const DashboardMainStyled = styled.main`
  width: 90%;
  margin: 0 auto;

  padding-top: 116px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 5%;
    color: var(--grey-0);
  }
  section {
    width: 100%;
  }
  section ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .card {
    width: 98.8;
    height: 146.8px;

    border-radius: 8px;

    position: relative;
    cursor: pointer;
  }
  .card img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .card button {
    position: absolute;
    top: 40%;
    left: 37%;

    border: none;
    border-radius: 100px;
    width: 30px;
    height: 30px;

    background-color: rgba(217, 217, 217, 70%);

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
  }
  .card:hover button {
    opacity: 1;
    transition: 0.5s;
  }
  .card:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
  .card svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    .card {
      width: 148.2px;
      height: 220.2px;
    }
  }
  @media (min-width: 1024px) {
    .card {
      width: 247px;
      height: 367px;
    }
  }
`;
