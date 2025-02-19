import { State } from "./State";

export type Action = 
  | { type: 'SET_SECTION'; payload: string };

const reducer = (state: State, action: Action) => {
    
    const actions = {
        'SET_SECTION': {...state, section:action.payload}
    }
    
    return actions[action.type] || state
}

export default reducer