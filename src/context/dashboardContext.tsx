import { createContext, useContext, useState } from "react";
import { number } from "yup";
import api from "../services/api";

interface IChildren {
  children: any;
}
interface IMovie {
  alt_genres: string;
  genre: string;
  id: number;
  poster: string;
  rate: number;
  rating: number;
  sinopse: string;
  title: string;
  trailer: string;
  type: string;
  year: string;
}
interface ISeries {
  alt_genres: string;
  genre: string;
  id: number;
  poster: string;
  rate: number;
  rating: number;
  sinopse: string;
  title: string;
  trailer: string;
  type: string;
  year: string;
}
// interface ISection {
//   actualSection: IMovie[] | ISerie[];
// }

// interface IUser {}

interface IDashboardContext {
  movies: IMovie[];
  series: ISeries[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  loadSeries: () => void;
  loadMovies: () => void;
  actualSection: IMovie[] | ISeries[];
  //   setActualSection: React.Dispatch<React.SetStateAction<IMovie[] | ISeries[]>>;
  handleFilterMovies: () => void;
  handleFilterSeries: () => void;
  modalEditProfile: boolean;
  setModalEditProfile: (modalEditProfile: boolean) => void;
  modalAddReview: boolean;
  setModalAddReview: (modalAddReview: boolean) => void;
  modalMovieInformations: boolean;
  setModalMovieInformations: (modalMovieInformations: boolean) => void;
  selectMovie: string;
  setSelectMovie: (movie: string) => void;
  sinopse: string;
  setSinopse: (sinopse: string) => void;
  rate: number;
  setRate: (rate: number) => void;
  video: string;
  setVideo: (video: string) => void;
  poster: string;
  setPoster: (poster: string) => void;
}
const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children }: IChildren) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [series, setSeries] = useState<ISeries[]>([]);
  const [actualSection, setActualSection] = useState<IMovie[] | ISeries[]>([]);
  const [modalEditProfile, setModalEditProfile] = useState<boolean>(false)
  const [modalAddReview, setModalAddReview] = useState<boolean>(false)
  const [modalMovieInformations, setModalMovieInformations] = useState<boolean>(false)
  const [selectMovie, setSelectMovie] = useState<string>("")
  const [sinopse, setSinopse] = useState<string>("")
  const [rate, setRate] = useState<number>(0)
  const [video, setVideo] = useState<string>("")
  const [poster, setPoster] = useState<string>("")


  //   const [user, setUser] = useState<IUser>({} as IUser);
  //   const [loading, setloading] = useState<boolean>(true);

  async function loadMovies() {
    await api
      .get("movies")
      .then((res) => {
        setMovies(res.data);
        setActualSection(res.data);
      })
      .catch((err) => err);
  }

  async function loadSeries() {
    await api
      .get("series")
      .then((res) => setSeries(res.data))
      .catch((err) => err);
  }

  function handleFilterMovies() {
    setActualSection(movies);
  }
  function handleFilterSeries() {
    setActualSection(series);
  }

  // const data = [...series, ...movies];
  // console.log(series);

  return (
    <DashboardContext.Provider
      value={{
        movies,
        setMovies,
        series,
        loadSeries,
        loadMovies,
        actualSection,
        handleFilterSeries,
        handleFilterMovies,
        modalEditProfile,
        setModalEditProfile,
        modalAddReview,
        setModalAddReview,
        setModalMovieInformations,
        modalMovieInformations,
        setSelectMovie,
        selectMovie,
        sinopse,
        setSinopse,
        rate,
        setRate,
        video,
        setVideo,
        poster,
        setPoster
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;

export function useDashboardContext(): IDashboardContext {
  const context = useContext(DashboardContext);
  return context;
}
