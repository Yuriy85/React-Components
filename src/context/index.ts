import { createContext } from 'react';

interface CurrentUserContextType {
  urlForDetail: string;
  setUrlForDetail: React.Dispatch<React.SetStateAction<string>>;
}

export const AppDataContext = createContext<CurrentUserContextType | null>(
  null
);
