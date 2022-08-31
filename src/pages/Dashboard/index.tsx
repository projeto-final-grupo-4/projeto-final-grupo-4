import { useContext } from "react";

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

import api from "../../services/api";

// interface IFilmes {
//   alt_genres: string;
//   genre: string;
//   id: number;
//   poster: string;
//   rate: number;
//   rating: number;
//   sinopse: string;
//   title: string;
//   trailer: string;
//   type: string;
//   year: string;
// }

const Dashboard = () => {
  // const [movies, setMovies] = useContext<IFilmes[]>([]);

  async function getData() {
    const data = await api
      .get("movies")
      .then((res: any) => console.log(res))
      .catch((err: any) => err);

    return data;
  }
  getData();

  return (
    <DashboardStyled>
      <header>
        <DashboardHeaderStyled>
          <div id="header_logo">
            <h2>LOGO/NOME</h2>
          </div>

          <div id="header_user">
            <HiUserGroup className="community_icon" />
            <Details>
              <details>
                <summary>
                  <HiUserCircle className="user_icon" />
                </summary>
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
              </details>
            </Details>
          </div>
        </DashboardHeaderStyled>
        <DashboardSubHeaderStyled>
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
        </DashboardSubHeaderStyled>
      </header>

      <DashboardMainStyled>
        <h2>Seção</h2>

        <section>
          <ul>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
            <li className="card">
              <img
                src="https://i.pinimg.com/originals/67/4a/bc/674abc2b24b4c2e2ea1c82ac9d8f3f8d.jpg"
                alt=""
              />
              <button>
                <FaRegPlayCircle />
              </button>
            </li>
          </ul>
        </section>
      </DashboardMainStyled>
    </DashboardStyled>
  );
};

export default Dashboard;
