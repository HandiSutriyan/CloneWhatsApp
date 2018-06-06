const initialState = {
    results: []
}
  
const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_STATUS':
            return {...state, results: action.payload}
        default:
            return state
    }
}

export default statusReducer