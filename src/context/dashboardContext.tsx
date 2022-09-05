import { createContext, useContext, useState } from "react";
import api from "../services/api";

interface IChildren {
  children: any;
}
export interface IMovie {
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


interface IDashboardContext {
  movies: IMovie[];
  series: ISeries[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
  setSeries:React.Dispatch<React.SetStateAction<ISeries[]>>;
  loadSeries: () => void;
  loadMovies: () => void;
  actualSection: IMovie[] | ISeries[];
    setActualSection: React.Dispatch<React.SetStateAction<IMovie[] | ISeries[]>>;
  handleFilterMovies: () => void;
  handleFilterSeries: () => void;
}
const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children }: IChildren) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [series, setSeries] = useState<ISeries[]>([]);
  const [actualSection, setActualSection] = useState<IMovie[] | ISeries[]>([]);

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
        setActualSection,
        movies,
        setMovies,
        setSeries,
        series,
        loadSeries,
        loadMovies,
        actualSection,
        handleFilterSeries,
        handleFilterMovies,
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
