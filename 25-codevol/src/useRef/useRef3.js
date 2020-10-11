import React,{useEffect,useRef,useState} from 'react'

export default function useRef3() {

    const [count,setCount] = useState(0)
    let myRef =useRef()
    useEffect(()=>{
        myRef.current = setInterval(() => {
            setCount(c=>c+1);
        }, 1000)
        return ()=> clearInterval(myRef.current)
    },[])
    return (
        <div>
              {count}    <br/>
              <button onClick={()=>clearInterval(myRef.current)}>Reset</button>
        </div>
    )
}