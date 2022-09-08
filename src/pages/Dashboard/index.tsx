import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  // DashboardHeaderStyled,
  DashboardMainStyled,
  DashboardStyled,
  DashboardSubHeaderStyled,
  // Details,
  DetailsCategory,
} from "./style";

import { AiOutlineSearch } from "react-icons/ai";

import { FaRegPlayCircle } from "react-icons/fa";
import { BsFillGearFill, BsCardList, BsChatLeft } from "react-icons/bs";

import ModalEditProfile from "../../components/Modals/modalEditProfile";
import ModalMovieInformations from "../../components/Modals/modalMovieInformations";
import ModalAddReview from "../../components/Modals/modalAddReview";

import { IData, useDashboardContext } from "../../context/dashboardContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import { motion } from "framer-motion";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  const {
    title,
    setTitle,
    actualSection,
    setActualSection,
    movies,
    setMovies,
    series,
    setSeries,
    all,
    setAll,
    handleSearch,
    setModalMovieInformations,
    setSelectMovie,
    setSinopse,
    setRate,
    setVideo,
    setPoster,
  } = useDashboardContext();

  useEffect(() => {
    const auth = localStorage.getItem("@user-auth");
    if (auth !== "true") {
      navigate("/login");
    }

    async function loadContent() {
      async function loadMovies() {
        await api
          .get("movies")
          .then((res) => {
            setMovies(res.data);
            setActualSection(res.data);
            setAll(res.data);
            const data = res.data;
            loadSeries(data);
          })
          .catch((err) => err);
      }

      async function loadSeries(data: IData[]) {
        await api
          .get("series")
          .then((res) => {
            setSeries(res.data);
            setAll(() => [...data, ...res.data]);
            setActualSection(() => [...data, ...res.data]);
          })
          .catch((err) => err);
      }
      await loadMovies();
    }
    loadContent();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <DashboardStyled>
        <ModalMovieInformations />
        <ModalEditProfile />
        <ModalAddReview />
        <header>
          <Header isDashboard={true} />
          <DashboardSubHeaderStyled>
            <div>
              <nav>
                <ul>
                  <li>
                    <button
                      className="navigation_buttons"
                      onClick={() => {
                        setActualSection(movies);
                        setTitle("Filmes");
                      }}
                    >
                      Filmes
                    </button>
                  </li>
                  <li>
                    <button
                      className="navigation_buttons"
                      onClick={() => {
                        setActualSection(series);
                        setTitle("Séries");
                      }}
                    >
                      Séries
                    </button>
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
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "acao"
                                    )
                                  );
                                  setTitle("Ação");
                                }}
                              >
                                Ação
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "suspense"
                                    )
                                  );
                                  setTitle("Suspense");
                                }}
                              >
                                Suspense
                              </li>

                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "comedia"
                                    )
                                  );
                                  setTitle("Comédia");
                                }}
                              >
                                Comédia
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "terror"
                                    )
                                  );
                                  setTitle("Terror");
                                }}
                              >
                                Terror
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "romance"
                                    )
                                  );
                                  setTitle("Romance");
                                }}
                              >
                                Romance
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "anime"
                                    )
                                  );
                                  setTitle("Anime");
                                }}
                              >
                                Anime
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(() =>
                                    all.filter(
                                      (element) => element.genre === "reality"
                                    )
                                  );
                                  setTitle("Reality");
                                }}
                              >
                                Reality
                              </li>
                              <li
                                onClick={() => {
                                  setActualSection(all);
                                  setTitle("Home");
                                }}
                              >
                                Todos
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </DetailsCategory>
                  </li>
                </ul>
              </nav>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(search);
                }}
              >
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">
                  <AiOutlineSearch />
                </button>
              </form>
            </div>
          </DashboardSubHeaderStyled>
        </header>

        <DashboardMainStyled>
          <h2>{title}</h2>

          <section>
            <ul>
              {actualSection.map((movie, index) => {
                return (
                  <li
                    onClick={() => {
                      setModalMovieInformations(true);
                      setSelectMovie(movie.title);
                      setSinopse(movie.sinopse);
                      setRate(movie.rate);
                      setVideo(movie.trailer);
                      setPoster(movie.poster);
                    }}
                    className="card"
                    key={index}
                  >
                    <img src={movie.poster} alt={movie.title} />
                    <div className="button_box">
                      <button>
                        <FaRegPlayCircle />
                      </button>
                    </div>
                    <div className="title_box">
                      <h5>{movie.title}</h5>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </DashboardMainStyled>
      </DashboardStyled>
    </motion.div>
  );
};

export default Dashboard;
