import React,{useEffect,useRef} from 'react'

export default function useRef1() {
 const myRef = useRef()
    useEffect(()=>{
        myRef.current.focus();
    },[])
    return (
        <div>
            <input ref={myRef} type='text'/>
        </div>
    )
}
