import { Link } from "react-router-dom";
import { DashboardHeaderStyled, Details } from "./style";
import { HiUserGroup, HiUserCircle } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import Logo from "../../assets/img/logo-projeto.png";

import Button from "../Button";

import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  isDashboard: boolean;
}

const Header = ({ isDashboard }: IHeaderProps) => {
  const navigate = useNavigate();

  return (
    <DashboardHeaderStyled>
      <div id="header_logo">
        <img src={Logo} alt={"logo"}></img>
      </div>

      <div id="header_user">
        {isDashboard ? (
          <Link to={"/community"}>
            <HiUserGroup className="community_icon" />
          </Link>
        ) : (
          <Link to={"/dashboard"}>
            <AiOutlineHome className="community_icon" />
          </Link>
        )}

        <Details>
          <div>
            <div className="user_icon">
              <HiUserCircle />
            </div>
            <div className="details">
              <nav>
                <ul>
                  <li>Configurações</li>
                  <li>Minha Lista</li>
                  <li>Meus Reviews</li>
                </ul>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>
              </nav>
            </div>
          </div>
        </Details>
      </div>
    </DashboardHeaderStyled>
  );
};

export default Header;
