const {createStore} = require('redux');
const initialState  = {
  age:21
};
const myReduder     = (state=initialState,action)=>{
const newState      = {...state};

  if(action.type    === 'ADD'){
    newState.age +=action.val;
  }else if(action.type    === 'REMOVE'){
    newState.age -=action.val;
  }
 return newState;
}

const store         = createStore(myReduder);
console.log('Basic data:'+JSON.stringify(store.getState()));
store.dispatch({type:'ADD',val:10});
console.log('After ADD:'+JSON.stringify(store.getState()));
store.dispatch({type:'REMOVE',val:20});
console.log('After REMOVE:'+JSON.stringify(store.getState()));
