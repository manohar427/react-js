import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action) =>{
    switch(action){
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
export default function RJ_1_UseReduder() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            Count:{count}<br/>
            <button onClick={()=>dispatch('inc')}>Increment</button>
            <button onClick={()=>dispatch('dec')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
