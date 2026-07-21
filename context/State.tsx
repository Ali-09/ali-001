import { ReactNode, useState, useEffect, useReducer } from 'react'
import Reducer, { Action } from './Reducer'
import Context from './Context'
import { Language, translations } from './translations'

interface ContextProviderProps {
  children: ReactNode;
}

export interface State {
  section: string;
}

const State = ({ children }: ContextProviderProps) => {
  const initialState: State = {
    section: '/'
  };

  const [state, dispatch] = useReducer((state: State, action: Action) => Reducer(state, action), initialState);
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language | null;
    if (savedLang === 'en' || savedLang === 'es') {
      setLangState(savedLang);
    } else {
      const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const setSection = (section: string) => {
    dispatch({
      type: 'SET_SECTION',
      payload: section
    });
  };

  return (
    <Context.Provider value={{
      section: state.section,
      setSection,
      lang,
      setLang,
      t: translations[lang]
    }}>
      {children}
    </Context.Provider>
  );
};

export default State;
