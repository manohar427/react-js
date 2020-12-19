import {useState} from 'react'

export default function CustUserInput(iv) {
    const [value,setValue] = useState(iv)
    const bind = {
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }

    const reset = () =>{
        setValue(iv)
    }
    return [value,bind,reset]
}