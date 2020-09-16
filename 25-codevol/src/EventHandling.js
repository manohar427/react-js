import React from 'react';

import './App.css';
//1
function EventHandling() {

  function show(){
    console.log('show...');
  }
  
  return (
    <div className="App">
      <button onClick={show()}>click</button>
    </div>
  );

}

export default EventHandling;