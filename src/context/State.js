import { useReducer } from 'react'
import Reducer from './Reducer'
import Context from './Context'

const State = (props) => {
    const initialState = {
        section: 'me'
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const setSection = (section) => {
        dispatch({
            type:'SET_SECTION',
            payload:section
        })
    }

    return (
        <Context.Provider value={{
            section: state.section,
            setSection
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default State