import React,{useEffect,useState} from 'react'

//Conditional Rendering
export default function RJ_15_UseEffect_4() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
   
    const context = useEffect(()=>{
        console.log('useeffect called..............');
            window.addEventListener('mousemove',logMousePosition)

            return ()=>{
                window.removeEventListener('mousemove',logMousePosition)
            }
        },[]
    )
    const logMousePosition = (e)=>{
        console.log('logMousePosition called..............');
        setX(e.clientX)
        setY(e.clientY)
    }
    return (
        <div>            
           X: {x}<br/>
           Y: {y}<br/>
                      
        </div>
    )
}