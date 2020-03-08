import { combineReducers } from 'redux'
import reducerA from './reducerA';
import reducerB from './reducerB';

//Combine Reducers
export default combineReducers({
    rA:reducerA,
    rB:reducerB
})