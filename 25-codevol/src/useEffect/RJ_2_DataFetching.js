import React,{useEffect,useReducer} from 'react'
import axios from 'axios';

const initialState = {
    loading:true,
    error:'',
    post:{}
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'SUCC':
            return {
                loading:false,
                error:'',
                post:action.payload
            }
        case 'FAIL':
            return {
                loading:false,
                error:'error occured...........',
                post:{}
            }
        default:
            return state;
    }
}
function RJ_2_DataFetching() {
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            dispatch({type:'SUCC',payload:res.data})
        }).catch(err=>{
            dispatch({type:'FAIL',payload:{}})
        })
    },[])

    return (
        <div>            
            {state.loading ?'Loading...':state.post.title}
            {state.error !=='' ?state.error:''}
        </div>
    )
}

export default RJ_2_DataFetching