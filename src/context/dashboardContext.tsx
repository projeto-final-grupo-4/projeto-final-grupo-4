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
}

const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext
);

const DashboardProvider = ({ children }: IChildren) => {
  const [movies, setMovies] = useState<IData[]>([]);
  const [series, setSeries] = useState<IData[]>([]);
  const [all, setAll] = useState<IData[]>([]);
  const [actualSection, setActualSection] = useState<IData[]>([]);

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
