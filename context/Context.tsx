import { createContext } from "react";
import { Language, Translations } from "./translations";

export interface ContextType {
  section: string;
  setSection: (section: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const Context = createContext<ContextType | undefined>(undefined);

export default Context;
