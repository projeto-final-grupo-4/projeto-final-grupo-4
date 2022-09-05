import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  DashboardHeaderStyled,
  DashboardMainStyled,
  DashboardStyled,
  DashboardSubHeaderStyled,
  Details,
} from "./style";

import { AiOutlineSearch } from "react-icons/ai";
import { HiUserGroup, HiUserCircle } from "react-icons/hi";
import { FaRegPlayCircle } from "react-icons/fa";

import Button from "../../components/Button";

import { IMovie, useDashboardContext } from "../../context/dashboardContext";
import { Link, Navigate } from "react-router-dom";



const Dashboard = () => {
  const [all,setAll] = useState<IMovie[]>([])
  const {
    actualSection,
    setActualSection,
    loadMovies,
    setMovies,
    setSeries,
    movies,
    series,
    loadSeries,
    handleFilterMovies,
    handleFilterSeries,
  } = useDashboardContext();

  useEffect(() => {
    // loadMovies();
    // loadSeries();
    // console.log(actualSection)
    // setActualSection(()=> [...movies,...series])

    async function loadMovies() {
      await api
        .get("movies")
        .then((res) => {
          setMovies(res.data);
          setActualSection(res.data);
          setAll(res.data)
          loadSeries()
        })
        .catch((err) => err);
    }
  
    async function loadSeries() {
      await api
        .get("series")
        .then((res) => {
          setSeries(res.data)
          setAll((old)=>[...old,...res.data])
          setActualSection((old)=>[...old,...res.data]);
        })
        .catch((err) => err);
    }
    loadMovies()
    

    
  }, []);
  
  console.log(actualSection)
  return (
    <DashboardStyled>
      <header>
        <DashboardHeaderStyled>
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
                      <li>Configurações</li>
                      <li>Minha Lista</li>
                      <li>Meus Reviews</li>
                    </ul>
                    <Button>Logout</Button>
                  </nav>
                </div>
              </div>
            </Details>
          </div>
        </DashboardHeaderStyled>
        <DashboardSubHeaderStyled>
          <div>
            <nav>
              <ul>
                <li
                  onClick={() => {
                    handleFilterMovies();
                  }}
                >
                  <button className="navigation_buttons">Filmes</button>
                </li>
                <li
                  onClick={() => {
                    handleFilterSeries();
                  }}
                >
                  <button className="navigation_buttons">Séries</button>
                </li>
                <li onClick={() => console.log("oi")}>
                  <button className="navigation_buttons">Categorias</button>
                </li>
              </ul>
            </nav>
            <form action="">
              <input type="text" />
              <button>
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </DashboardSubHeaderStyled>
      </header>

      <DashboardMainStyled>
        <h2>{actualSection[0]?.type === "movie" ? "Filmes" : "Séries"}</h2>

        <section>
          <ul>
            {actualSection.map((movie,index) => {
              return (
                <li className="card" key={index}>
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
