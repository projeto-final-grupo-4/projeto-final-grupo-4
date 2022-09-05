import { createContext, ReactNode, useState } from 
"react";
import api from "../services/api";

interface IContextProps {
  children: ReactNode;
}

export interface IAxiosData {
  content: string;
  id: number;
  moviesId: number;
  rate: number;
  seriesId: number;
  usersId: number;
}

export interface IAxiosMovieData {
  id: number,
  title: string,
  sinopse: string,
  year: string,
  genre: string,
  rating: number,
  alt_genres: string,
  type: string,
  poster: string,
  trailer: string,
  rate: number
}

interface IAxiosUsersData {
  id: number, 
  name?: string, 
  email: string,
  password: string, 
  avatar?: string, 
  watch_later?: IAxiosMovieData[]
}

interface IProviderProps {
  opinions: IAxiosData[];
  movies: IAxiosMovieData[];
  series: IAxiosMovieData[];
  users: IAxiosUsersData[];
  loading: boolean;
  getOpinions: () => void;
  getMovies: () => void;
}

export const CommunityContext = createContext<IProviderProps>(
  {} as IProviderProps
);

const CommunityProvider = ({ children }: IContextProps) => {
  const [opinions, setOpinions] = useState<IAxiosData[]>([]);
  const [movies, setMovies] = useState<IAxiosMovieData[]>([])
  const [series, setSeries] = useState<IAxiosMovieData[]>([])
  const [users, setUsers] = useState<IAxiosUsersData[]>([])
  const [loading, setLoading] = useState<boolean>(false);
    
  const getOpinions = () => {
    api
      .get<IAxiosData[]>("opinions")
      .then((res) => setOpinions(res.data))
      .catch((err) => console.error(err));
  };

  const getMovies = () => {
    api
      .get<IAxiosMovieData[]>("movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err))
      getOpinions()
      getUsers()
      getSeries()
  }

  const getUsers = () => {
    api
      .get<IAxiosUsersData[]>("users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
  }

  const getSeries = () => {
    api
      .get<IAxiosMovieData[]>("series")
      .then((res) => setSeries(res.data))
      .catch((err) => console.error(err))
  }
  
  return (
    <CommunityContext.Provider value={{ opinions, movies, series, loading, getOpinions, getMovies, users }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
