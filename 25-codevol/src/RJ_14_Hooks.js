import React from 'react'

export default function RJ_14_Hooks() {
    const [id,setId] = React.useState(0)
    return (
        <div>
            <button onClick={()=>setId(id=>{return id+1})}>count:{id}</button>
        </div>
    )
}