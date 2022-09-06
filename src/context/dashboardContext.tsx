import { createContext, ReactElement, useContext, useState } from "react";
import api from "../services/api";

interface IChildren {
  children: ReactElement;
}
export interface IData {
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
  movies: IData[];
  series: IData[];
  all: IData[];
  setMovies: React.Dispatch<React.SetStateAction<IData[]>>;
  setSeries: React.Dispatch<React.SetStateAction<IData[]>>;
  setAll: React.Dispatch<React.SetStateAction<IData[]>>;
  actualSection: IData[];
  setActualSection: React.Dispatch<React.SetStateAction<IData[]>>;
  handleSearch: (data: string) => void;
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
  const [movies, setMovies] = useState<IData[]>([]);
  const [series, setSeries] = useState<IData[]>([]);
  const [all, setAll] = useState<IData[]>([]);
  const [actualSection, setActualSection] = useState<IData[]>([]);
  const [modalEditProfile, setModalEditProfile] = useState<boolean>(false);
  const [modalAddReview, setModalAddReview] = useState<boolean>(false);
  const [modalMovieInformations, setModalMovieInformations] = useState<boolean>(false);
  const [selectMovie, setSelectMovie] = useState<string>("");
  const [sinopse, setSinopse] = useState<string>("");
  const [rate, setRate] = useState<number>(0);
  const [video, setVideo] = useState<string>("");
  const [poster, setPoster] = useState<string>("");

  function handleSearch(data: string) {
    const filter = all.filter((element) =>
      element.title.toLowerCase().includes(data.toLowerCase().trim())
    );
    setActualSection(filter);
  }

  return (
    <DashboardContext.Provider
      value={{
        setActualSection,
        movies,
        setMovies,
        setSeries,
        series,
        actualSection,
        all,
        setAll,
        handleSearch,
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
