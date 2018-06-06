const initialState = {
    results: [],
    data:[]
}
  
const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CHATS':
            return {...state, results: action.payload}
        case 'ALL_DATA_CHATS':
        	return {...state,data: action.payload}
        default:
            return state
    }
}

export default chatsReducer