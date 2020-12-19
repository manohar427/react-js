import React,{useState} from 'react'

export default function CommonCounter() {
    const [count,setCount] = useState(0)

    const increment = ()=>{
        setCount(c=>c+1)
    }
    const decrement = ()=>{
        setCount(c=>c-1)
    }
    const reset = ()=>{
        setCount(0)
    }

    return [increment,decrement,reset,count]

}