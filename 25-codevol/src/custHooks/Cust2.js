import React,{useState} from 'react'
import CustomComp from './CustomComp';

export default function Cust2() {

    const [count,setCount] = useState(0)

    CustomComp(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count:{count}</button>
        </div>
    )
}