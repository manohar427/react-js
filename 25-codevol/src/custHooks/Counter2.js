import React from 'react'
import CommonCounter from './CommonCounter';

export default function Counter2() {

    const [increment,decrement,reset,count] = CommonCounter()

    return (
        <div>Counter 2:{count}<br/>
            <button onClick={increment}>Increment</button><br/>       
            <button onClick={decrement}>Decrement</button><br/>       
            <button onClick={reset}>Reset</button><br/>        
        </div>
    )
}