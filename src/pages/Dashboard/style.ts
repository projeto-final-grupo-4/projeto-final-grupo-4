import styled from "styled-components";

export const DashboardStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey-3);
`;
export const DashboardHeaderStyled = styled.header`
  background-color: var(--grey-2);
  width: 100%;

  #header_container {
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
    #header_user {
      width: 100px;
      display: flex;
      justify-content: end;
      gap: 20px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  #header_navigation {
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
  }
`;
export const DashboardMainStyled = styled.main`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: center;

  h2 {
    margin-top: 5%;
    color: var(--grey-0);
  }
`;
