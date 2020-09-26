import React from 'react'

export default function RJ_14_Hooks_Array() {
    const [name,setNumber] = React.useState([])
    const setNumberTest =()=>{
        setNumber([...name,{id:name.length,value:Math.floor(Math.random()*10)+1}])
    }
    return (
        <div>
               <button onClick={()=>setNumberTest()}>AddNumber</button>  
            <ul>               
                {
                    name.map(a=>{
                        return (<li>{a.value}</li>)
                    })
                }         
            </ul>
        </div>
    )
}