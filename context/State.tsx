import { useReducer } from 'react'
import Reducer from './Reducer'
import Context from './Context'

const State = (props) => {
    const initialState = {
        section: '/'
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    const setSection = (section) => {
        dispatch({
            type:'SET_SECTION',
            payload:section
        })
    }

    return (
        // @ts-expect-error TS(2322): Type '{ section: any; setSection: (section: any) =... Remove this comment to see the full error message
        <Context.Provider value={{
            section: state.section,
            setSection
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default State