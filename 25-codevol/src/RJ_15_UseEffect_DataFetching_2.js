import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function RJ_15_UseEffect_DataFetching_2() {
    const [list,setList] = useState('')
    const [id,setId] = useState(1)
    const [cid,setCid] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${cid}`).then(r=>{
            setList(r.data.title)
        }).catch(error=>{
                alert(error)
        })
        console.log('data fetched.........');
    },[cid])

    const handleClick = ()=>{
        setCid(id)
    }
    return (
        <div>
            <input type='text' onChange={(e)=>setId(e.target.value)}/><br/>
            <button onClick={handleClick}>Show</button><br/>
            {list}
        </div>
    )
}
