import { useContext, useEffect, useState } from "react";
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
import { HiUserGroup, HiUserCircle } from "react-icons/hi";
import { FaRegPlayCircle } from "react-icons/fa";
import { BsFillGearFill, BsCardList, BsChatLeft } from 'react-icons/bs'

import Button from "../../components/Button";
import ModalEditProfile from "../../components/Modals/modalEditProfile";
import ModalMovieInformations from "../../components/Modals/modalMovieInformations";
import ModalAddReview from "../../components/Modals/modalAddReview";

import { IData, useDashboardContext } from "../../context/dashboardContext";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Dashboard = () => {
  const [search, setSearch] = useState<string>("");
  const [title, setTitle] = useState<string>("Home");

  const navigate = useNavigate();

  const {
    actualSection,
    setActualSection,
    movies,
    setMovies,
    series,
    setSeries,
    all,
    setAll,
    handleSearch,
    setModalEditProfile,
    setModalMovieInformations,
    setSelectMovie,
    setSinopse,
    setRate,
    setVideo,
    setPoster
  } = useDashboardContext();

  useEffect(() => {
    const auth = localStorage.getItem("@user-auth");
    console.log(auth);
    if (auth !== "true") {
      navigate("/login");
    }

    async function teste() {
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
    teste();
  }, []);

  return (
    <DashboardStyled>
      <ModalMovieInformations />
      <header>
        <Header isDashboard={true} />
        {/* <DashboardHeaderStyled>
          <div id="header_logo">
            <h2>LOGO/NOME</h2>
          </div>

          <div id="header_user">
            <Link to={"/community"}>
              <HiUserGroup className="community_icon" />
            </Link>
            <Details>
              <div>
                <div className="user_icon">
                  <HiUserCircle />
                </div>
                <div className="details">
                  <nav>
                    <ul>
                      <li><BsFillGearFill /><button onClick={() => setModalEditProfile(true)} >Configurações</button></li>
                      <li><BsCardList /><button>Minha Lista</button></li>
                      <li><BsChatLeft /><button>Meus Reviews</button></li>
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
        </DashboardHeaderStyled> */}
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
              <input type="text" onChange={(e) => setSearch(e.target.value)} />
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
          <ModalAddReview />
          <ModalEditProfile />
          <ul>
            {actualSection.map((movie, index) => {
              return (
                <li className="card" key={index} onClick={() => {
                  setModalMovieInformations(true);
                  setSelectMovie(movie.title);
                  setSinopse(movie.sinopse);
                  setRate(movie.rate);
                  setVideo(movie.trailer);
                  setPoster(movie.poster)
                }}>
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
  );
};

//  return isLogged? (
//   <DashboardStyled>
//     <header>
//       <DashboardHeaderStyled>
//         <div id="header_logo">
//           <h2>LOGO/NOME</h2>
//         </div>

//         <div id="header_user">
//           <Link to={"/community"}>
//             <HiUserGroup className="community_icon" />
//           </Link>
//           <Details>
//             <details>
//               <summary>
//                 <HiUserCircle className="user_icon" />
//               </summary>
//               <div className="details">
//                 <nav>
//                   <ul>
//                     <li>Configurações</li>
//                     <li>Minha Lista</li>
//                     <li>Meus Reviews</li>
//                   </ul>
//                   <Button>Logout</Button>
//                 </nav>
//               </div>
//             </details>
//           </Details>
//         </div>
//       </DashboardHeaderStyled>
//       <DashboardSubHeaderStyled>
//         <div>
//           <nav>
//             <ul>
//               <li
//                 onClick={() => {
//                   handleFilterMovies();
//                 }}
//               >
//                 <button className="navigation_buttons">Filmes</button>
//               </li>
//               <li
//                 onClick={() => {
//                   handleFilterSeries();
//                 }}
//               >
//                 <button className="navigation_buttons">Séries</button>
//               </li>
//               <li onClick={() => console.log("oi")}>
//                 <button className="navigation_buttons">Categorias</button>
//               </li>
//             </ul>
//           </nav>
//           <form action="">
//             <input type="text" />
//             <button>
//               <AiOutlineSearch />
//             </button>
//           </form>
//         </div>
//       </DashboardSubHeaderStyled>
//     </header>

//     <DashboardMainStyled>
//       <h2>{actualSection[0]?.type === "movie" ? "Filmes" : "Séries"}</h2>

//       <section>
//         <ul>
//           {actualSection.map((movie) => {
//             return (
//               <li className="card" key={movie.id}>
//                 <img src={movie.poster} alt={movie.title} />
//                 <div className="button_box">
//                   <button>
//                     <FaRegPlayCircle />
//                   </button>
//                 </div>
//                 <div className="title_box">
//                   <h5>{movie.title}</h5>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//     </DashboardMainStyled>
//   </DashboardStyled>)
//   : (<Navigate to={'/login'} replace={true}></Navigate>)
// };

export default Dashboard;
