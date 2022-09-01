import { CommunityHeader, HeaderButton, HeaderNavigation, MainContent } from "./style";
import { useContext } from "react";
import { CommunityContext } from "../../contexts/CommunityContext";

import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BsFillChatLeftTextFill } from "react-icons/bs"

const Community = () => {

  const {opinions, getOpinions} = useContext(CommunityContext)

  return (
    <>
      <CommunityHeader>
        <h2>Nome/Logo</h2>
        <span>
          <HeaderButton>
            <AiOutlineHome />
          </HeaderButton>
          <HeaderButton>
            <HiUserCircle/>
          </HeaderButton>
        </span>
      </CommunityHeader>
      <HeaderNavigation>
        <div className="header_navigation">
            <h2>Reviews</h2>
            <span>
                <nav>
                    <ul>
                        <li>
                          <button onClick={getOpinions}>Filmes</button>
                        </li>
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
            </span>
        </div>
      </HeaderNavigation>
      <MainContent>
        <ul>
        {
            opinions.map((opinion) => {
              return(
                <li key={opinion.id}>
                  <div className="mediaInfo">
                    <img src="" alt="text"/>
                    <h3>Título</h3>
                    <p>Rate</p>
                  </div>
                  <div className="userInfo">
                    <img src="" alt="" />
                    <h3>Usuário</h3>
                  </div>
                  <p className="content">{opinion.content}</p>
                  <span>
                    <p>{opinion.rate}</p>
                    <button><BsFillChatLeftTextFill/></button>
                  </span>
                </li>
              )
            })  
        }
        </ul>
      </MainContent>
    </>
  );
};

export default Community;
