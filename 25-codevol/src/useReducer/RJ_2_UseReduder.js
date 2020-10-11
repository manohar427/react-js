import React,{useReducer} from 'react'

const initialState = {count:100,secCount:200}
const reducer = (state,action) =>{
    switch(action.type){
        case 'inc':
            return {... state,count:state.count + action.data}
        case 'dec':
            return {... state,count:state.count - action.data}
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
export default function RJ_2_UseReduder() {
    const [defState,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            Count:{defState.count}<br/>
            second Count:{defState.secCount}<br/>
            <button onClick={()=>dispatch({type:'inc',data:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'inc',data:5})}>Increment-5</button>
            <button onClick={()=>dispatch({type:'dec',data:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'dec',data:5})}>Decrement-5</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}