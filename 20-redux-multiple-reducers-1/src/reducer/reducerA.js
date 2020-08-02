const initialState = {
    a: 1
  };
  
  const reducer = (state = initialState, action) => {
    console.log("ACTION"+JSON.stringify(action));
    if (action.type === "UPDATE_A") {
      return {
        ...state,
        a: state.a + action.b + 1
      };
    }
  
    return state;
  };
  
  export default reducer;