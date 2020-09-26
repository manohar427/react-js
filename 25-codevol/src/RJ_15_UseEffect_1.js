import React,{useEffect,useState} from 'react'

//Calling before & after Rendering
export default function RJ_15_UseEffect_1() {
    const [count, stef] = useState(0)
   
    const context = useEffect(()=>{
            document.title = `Count here:${count}`
        }
    )
    return (
        <div>
            <button onClick={()=>stef(c=>c+1)}>Add:{count}</button>
        </div>
    )
}