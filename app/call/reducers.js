const initialState = {
    results:[],
    isLoading:false
}
  
const callReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CALL':
            return {...state, results: action.payload}
         case 'ALL_CONTACT_PENDING':
         	return {...state, isLoading:true}
         case 'ALL_CONTACT_FULFILLED':
         	return {...state, results : action.payload.data}
        default:
            return state
    }
}

export default callReducer