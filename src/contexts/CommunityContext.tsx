import { createContext, ReactNode, useState } from "react";
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

interface IProviderProps {
  opinions: IAxiosData[];
  getOpinions: () => void;
}

export const CommunityContext = createContext<IProviderProps>(
  {} as IProviderProps
);

const CommunityProvider = ({ children }: IContextProps) => {
  const [opinions, setOpinions] = useState<IAxiosData[]>([]);
    
  const getOpinions = () => {
    api
      .get<IAxiosData[]>("opinions")
      .then((res) => setOpinions(res.data))
      .catch((err) => console.error(err));
  };
  
  return (
    <CommunityContext.Provider value={{ opinions, getOpinions }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
