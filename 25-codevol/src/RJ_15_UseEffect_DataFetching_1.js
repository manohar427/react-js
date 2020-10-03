import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function RJ_15_UseEffect_DataFetching_1() {
    const [list,setList] = useState('')
    const [id,setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(r=>{
            setList(r.data.title)
        }).catch(error=>{
                alert(error)
        })
        console.log('data fetched.........');
    },[id])
    return (
        <div>
            <input type='text' onChange={(e)=>setId(e.target.value)}/><br/>
            {list}
        </div>
    )
}
