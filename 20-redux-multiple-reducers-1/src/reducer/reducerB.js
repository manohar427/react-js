const initialState = {
    b: 1
  };
  
  const reducer = (state = initialState, action) => {
    if (action.type === "UPDATE_B") {
      return {
        ...state,
        b: state.b + action.a + 1
      };
    }
  
    return state;
  };
  
  export default reducer;