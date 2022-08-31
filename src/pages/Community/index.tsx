import { CommunityHeader, HeaderButton, HeaderNavigation } from "./style";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";

const Community = () => {
  return (
    <>
      <CommunityHeader>
        <h2>Nome/Logo</h2>
        <span>
          <HeaderButton>
            <AiOutlineHome />
          </HeaderButton>
          <HeaderButton>
            <HiUserCircle />
          </HeaderButton>
        </span>
      </CommunityHeader>
      <HeaderNavigation>
        <div className="header_navigation">
            <h2>Reviews</h2>
            <span>
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
            </span>
        </div>
      </HeaderNavigation>
    </>
  );
};

export default Community;
