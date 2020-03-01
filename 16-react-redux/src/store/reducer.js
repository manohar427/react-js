const initialState = {
age:20
};

const reducer = (state= initialState,action)=>{
    const newState = {...state};
    //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
     if(action.type==='INCR'){
newState.age++;
     }else if(action.type==='DECR'){
        newState.age--;
     }
    return newState;
}

export default reducer;