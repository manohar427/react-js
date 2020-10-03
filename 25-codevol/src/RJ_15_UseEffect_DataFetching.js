import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function RJ_15_UseEffect_DataFetching() {
    const [ele,setEle] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(r=>{
            setEle(r.data)
        }).catch(error=>{
            alert(error)
        })
        console.log('data fetched.........');
    },[])
    return (
        <div>
            <ul>
                {
                    ele.map((e,index)=>{
                        return <li key={index}>
                            {e.title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
