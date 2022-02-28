const initialState = {
  categories: [],
}

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
    
      case 'FETCH_PRODUCTS':
        console.log(action)
        console.log(state)
        return {
          ...state,
          categories: action.payload,

        }
    
  
    default:
      return state 
    }
  }
export default rootReducer