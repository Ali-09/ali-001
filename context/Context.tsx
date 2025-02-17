import { createContext } from "react";

export interface ContextType {
  section: string;
  setSection: (section: string) => void;
}

const Context = createContext<ContextType | undefined>(undefined);

export default Context;
