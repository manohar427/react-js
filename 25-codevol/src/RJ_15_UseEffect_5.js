import React,{useEffect,useState} from 'react'

//Conditional Rendering
export default function RJ_15_UseEffect_5() {
    const [count, steCount] = useState(0)
   
    const increment =()=>{
        steCount(count=>count+1)
        console.log('increment called..');
    }

    useEffect(()=>{
       const tf = setInterval(increment,1000)
       console.log('useEffect called..');
       return ()=>{
        clearInterval(tf)
       }
        },[]
    )
    return (
        <div>
            {count}            
        </div>
    )
}