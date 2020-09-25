import React from 'react'

export default function RJ_14_Hooks() {
    const [id,setId] = React.useState(0)
    return (
        <div>
            count:{id}
            <input type='text' name='id' onChange={(e)=>setId(e.target.value)}></input>
        </div>
    )
}
