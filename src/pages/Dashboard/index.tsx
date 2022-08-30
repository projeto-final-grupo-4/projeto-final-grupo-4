import {
  DashboardHeaderStyled,
  DashboardMainStyled,
  DashboardStyled,
} from "./style";

import { AiOutlineSearch } from "react-icons/ai";
import { HiUserGroup, HiUserCircle } from "react-icons/hi";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <DashboardHeaderStyled>
        <div id="header_container">
          <div id="header_logo">
            <h2>LOGO/NOME</h2>
          </div>

          <div id="header_user">
            <HiUserGroup />
            <HiUserCircle />
          </div>
        </div>
        <div id="header_navigation">
          <div>
            <nav>
              <ul>
                <li>Filmes</li>
                <li>Séries</li>
                <li>Categorias</li>
              </ul>
            </nav>
            <form action="">
              <input type="text" />
              <button>
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </div>
      </DashboardHeaderStyled>

      <DashboardMainStyled>
        <h2>Seção</h2>
      </DashboardMainStyled>
    </DashboardStyled>
  );
};

export default Dashboard;
