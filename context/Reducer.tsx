const reducer = (state,action) => {
    
    const actions = {
        'SET_SECTION': {...state, section:action.payload}
    }
    
    return actions[action.type] || state
}

export default reducer