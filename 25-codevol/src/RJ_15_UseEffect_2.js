import React,{useEffect,useState} from 'react'

//Conditional Rendering
export default function RJ_15_UseEffect_2() {
    const [count, steCount] = useState(0)
    const [name, steName] = useState('')
   
    const context = useEffect(()=>{
        console.log('useeffect called..............');
            document.title = `Count here:${count}`
        },[name,count]
    )
    return (
        <div>
            {name}<br/>
            <button onClick={()=>steCount(c=>c+1)}>Add:{count}</button><br/>
            <input type='text' onChange={e=>steName(e.target.value)}></input><br/>
        </div>
    )
}