const initialState = {
    results: [],
    isLoading:false,
    isError:false,
    isSuccess:false
}
  
const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CONTACTS_PENDING':
            return {...state,isLoading:false}
        case 'ALL_CONTACT_FULFILLED':
        	return{...state,isLoading:true,results: action.payload.data}
        	case 'ALL_CONTACT_REJECTED':
        	return{...state,isError:true,results: action.payload.data}
        default:
            return state
    }
}

export default contactsReducer