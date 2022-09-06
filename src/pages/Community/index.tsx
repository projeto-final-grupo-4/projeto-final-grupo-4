import {
  CommunityHeader,
  HeaderButton,
  HeaderNavigation,
  MainContent,
} from "./style";
import { useContext } from "react";
import { CommunityContext } from "../../context/CommunityContext";

import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import Header from "../../components/Header";

const Community = () => {
  const { opinions, movies, users, series, loading } =
    useContext(CommunityContext);

  return (
    <>
      <CommunityHeader>
        <Header isDashboard={false} />
        {/* <h2>Nome/Logo</h2>
        <span>
          <HeaderButton>
            <AiOutlineHome />
          </HeaderButton>
          <HeaderButton>
            <HiUserCircle />
          </HeaderButton>
        </span> */}
      </CommunityHeader>
      <HeaderNavigation>
        <div className="header_navigation">
          <h2>Reviews</h2>
          <span>
            <nav>
              <ul>
                <li>
                  <button>Filmes</button>
                </li>
                <li>
                  <button>Séries</button>
                </li>
                <li>
                  <button>Categoria</button>
                </li>
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
          {loading === false ? (
            <div className="divLoading">Carregando...</div>
          ) : (
            opinions.map((opinion) => {
              return (
                (opinion.moviesId !== 0 && (
                  <li key={opinion.id}>
                    <div className="mediaInfo">
                      {movies.map((elem) => {
                        return (
                          elem.id === opinion.moviesId && (
                            <img
                              src={elem.poster}
                              alt={`Poster do filme ${elem.title}`}
                            />
                          )
                        );
                      })}
                      <span className="sinopseRate">
                        {movies.map((elem) => {
                          return (
                            elem.id === opinion.moviesId && <p>{elem.title}</p>
                          );
                        })}
                        {movies.map((elem) => {
                          return (
                            elem.id === opinion.moviesId && (
                              <p className="sinopse">{elem.sinopse}</p>
                            )
                          );
                        })}
                      </span>
                    </div>
                    <div className="userInfo">
                      <span className="userData">
                        {users.map((elem) => {
                          return (
                            elem.id === opinion.usersId && (
                              <img src={elem.avatar} alt="" />
                            )
                          );
                        })}
                        {users.map((elem) => {
                          return (
                            elem.id === opinion.usersId && (
                              <p className="sinopse">{elem.name}</p>
                            )
                          );
                        })}
                      </span>
                      <p className="content">{opinion.content}</p>
                      <span className="rateButton">
                        <p>{opinion.rate}</p>
                        <button>
                          <BsFillChatLeftTextFill />
                        </button>
                      </span>
                    </div>
                  </li>
                )) ||
                (opinion.seriesId !== 0 && (
                  <li key={opinion.id}>
                    <div className="mediaInfo">
                      {series.map((elem) => {
                        return (
                          elem.id === opinion.seriesId && (
                            <img
                              src={elem.poster}
                              alt={`Poster da série ${elem.title}`}
                            />
                          )
                        );
                      })}
                      <span className="sinopseRate">
                        {series.map((elem) => {
                          return (
                            elem.id === opinion.seriesId && <p>{elem.title}</p>
                          );
                        })}
                        {series.map((elem) => {
                          return (
                            elem.id === opinion.seriesId && (
                              <p className="sinopse">{elem.sinopse}</p>
                            )
                          );
                        })}
                      </span>
                    </div>
                    <div className="userInfo">
                      <span className="userData">
                        {users.map((elem) => {
                          return (
                            elem.id === opinion.usersId && (
                              <img src={elem.avatar} alt="" />
                            )
                          );
                        })}
                        {users.map((elem) => {
                          return (
                            elem.id === opinion.usersId && (
                              <p className="sinopse">{elem.name}</p>
                            )
                          );
                        })}
                      </span>
                      <p className="content">{opinion.content}</p>
                      <span className="rateButton">
                        <p>{opinion.rate}</p>
                        <button>
                          <BsFillChatLeftTextFill />
                        </button>
                      </span>
                    </div>
                  </li>
                ))
              );
            })
          )}
        </ul>
      </MainContent>
    </>
  );
};

export default Community;
