import React from 'react'

export default function RJ_14_Hooks_Object() {
    const [name,setName] = React.useState({fname:'',lname:''})
    return (
        <div>
            fname:<input type='text' name='fname' onChange={(e)=>setName({...name,fname:e.target.value})}></input><br/>
            lname:<input type='text' name='nname' onChange={(e)=>setName({...name,lname:e.target.value})}></input><br/>
            {
                JSON.stringify(name)
            }
        </div>
    )
}