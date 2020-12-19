import React,{useState} from 'react'
import CustomComp from './CustomComp';

export default function Cust1() {

    const [count,setCount] = useState(0)

    CustomComp(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>
    )
}