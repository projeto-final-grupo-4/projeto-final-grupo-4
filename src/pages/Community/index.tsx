import {
  CommunityHeader,
  DetailsCategory,
  HeaderNavigation,
  MainContent,
} from "./style";
import { useContext } from "react";
import { CommunityContext } from "../../context/CommunityContext";

import {AiOutlineSearch } from "react-icons/ai";

import { BsFillChatLeftTextFill } from "react-icons/bs";
import Header from "../../components/Header";

const Community = () => {
  const {
    opinions,
    movies,
    users,
    series,
    loading,
    opinionsAll,
    setOpinionsAll,
  } = useContext(CommunityContext);

  const filterOpinionsMovies = () => {
    const opinionsFiltered = opinions.filter((elem) => elem.moviesId !== 0);
    setOpinionsAll(opinions);
    setOpinionsAll(opinionsFiltered);
  };

  const filterOpinionsSeries = () => {
    const opinionsFiltered = opinions.filter((elem) => elem.seriesId !== 0);
    setOpinionsAll(opinions);
    setOpinionsAll(opinionsFiltered);
  };

  return (
    <>
      <CommunityHeader>
        <Header isDashboard={false} />
      </CommunityHeader>
      <HeaderNavigation>
        <div className="header_navigation">
          <h2>Reviews</h2>
          <span>
            <nav>
              <ul>
                <li>
                  <button onClick={filterOpinionsMovies}>Filmes</button>
                </li>
                <li>
                  <button onClick={filterOpinionsSeries}>Séries</button>
                </li>
                <li>
                <DetailsCategory>
                    <div>
                      <div className="category">
                        <span>Categorias</span>
                      </div>
                      <div className="details_category">
                        <nav>
                          <ul>
                            <li>Ação</li>
                            <li>Suspense</li>
                            <li>Comédia</li>
                            <li>Terror</li>
                            <li>Romance</li>
                            <li>Anime</li>
                            <li>Reality</li>
                            <li>Todos</li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </DetailsCategory>
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
            opinionsAll.map((opinion) => {
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
                        <p>{`${opinion.rate}/5`}</p>
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
                        <p>{`${opinion.rate}/5`}</p>
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
