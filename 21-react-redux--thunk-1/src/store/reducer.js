const initialState = {
  age: 20,
  history: [],
  loading:false,
  data:null
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "AGE_UP":
      console.log('Reducer:'+JSON.stringify(action));
      return {
        ...state,
        age: state.age + action.value,
        loading:false,
        data:action.data,
        history: state.history.concat({ id: Math.random(), age: state.age + action.value+":"+action.data })
      };
      break;
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({ id: Math.random(), age: state.age + action.value })
      };
      break;
    case "DEL_ENTRY":
      return {
        ...state,
        history: newState.history.filter((el)=> el.id !== action.id )
      }
      break;
    case "LOADING":
      console.log('Reducer ... Loading');
      console.log('Reducer ... Loading:'+JSON.stringify(state));

      return {
        ...state,
        loading: true,
        data:"Loading.........."
      }
      break;  
  }
  return newState;
};
export default reducer;
