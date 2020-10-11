import React,{useMemo, useState} from 'react'

export default function RJ_1_UseMemo() {
    const [c1,setc1] = useState(0)
    const [c2,setc2] = useState(0)

    const incc1 = ()=>{
        setc1(c1+1)
    }

    const incc2 = ()=>{
        setc2(c2+1)
    }
    const isEven = useMemo(()=>{
        let i=0;
        while(i<2000000000) i++
        return c1%2 ===0;
    },[c1])
   
    return (
        <div>
            <button onClick={incc1}>Count1 - {c1}</button>{isEven?"Even":"Odd"}<br/>
            <button onClick={incc2}>Count2 - {c2}</button><br/>
        </div>
    )
}
