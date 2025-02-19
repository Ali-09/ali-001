import { ReactNode, useReducer } from 'react'
import Reducer, { Action } from './Reducer'
import Context from './Context'

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

  const setSection = (section: string) => {
    dispatch({
      type: 'SET_SECTION',
      payload: section
    });
  };

  return (
    <Context.Provider value={{
      section: state.section,
      setSection
    }}>
      {children}
    </Context.Provider>
  );
};

export default State;
