import React,{useEffect,useState} from 'react'

import RJ_15_UseEffect_4 from './RJ_15_UseEffect_4';
//Conditional Rendering
export default function RJ_15_UseEffect_4_1() {   
    const [toggle,setToggle] = useState(true) 
    return (
        <div>     
            {toggle && <RJ_15_UseEffect_4/>}
          <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </div>
    )
}