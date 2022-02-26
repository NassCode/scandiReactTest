const initialState = {
  counter: [{count: 0}],
}

const rootReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      let newCount = state.counter[0].count + 1;
      let newState = [{count: newCount}];
      return {
        ...state,
        counter: newState
      }
    
    case 'DECREMENT':
      let newCount2 = state.counter[0].count - 1;
      let newState2 = [{count: newCount2}];
      return {
        ...state,
        counter: newState2
      }
  
    default:
      return state 
    }
  }
export default rootReducer