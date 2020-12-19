import React,{useState} from 'react'

import CustUserInput from './CustUserInput';

export default function UserInput() {
    //const [fn,setFn] = useState('')
    //const [ln,setLn] = useState('')

    const [fn,bindFn,resetFn] = CustUserInput('');
    const [ln,bindLn,resetLn] = CustUserInput('');

    const submitHandler = (e)=>{
        e.preventDefault();
        alert(`hi ${fn} ${ln}`);
        resetFn('');
        resetLn('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                FN:<input type='text' {... bindFn}/><br/>
                LN:<input type='text' {... bindLn}/><br/>
                <input type='submit' value='Submit'/><br/>
            </form>
        </div>
    )
}