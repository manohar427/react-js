import React,{useEffect} from 'react'

export default function CustomComp(count) {
    useEffect(()=>{
        document.title=`Title............:${count}`;
    },[count])
}