import { CommunityHeader, HeaderButton } from "./style";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

const Community = () => {
  return (
    <>
      <CommunityHeader>
        <h1>Nome/Logo</h1>
        <span>
          <HeaderButton>
            <AiOutlineHome />
          </HeaderButton>
          <HeaderButton>
            <FaRegUserCircle />
          </HeaderButton>
        </span>
      </CommunityHeader>
    </>
  );
};

export default Community;
