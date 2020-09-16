import React from 'react';

import './App.css';
//1
function Child(props) {

  return (
    <div className="App">
      <button onClick={()=>props.show(1000)}>From child click</button>
    </div>
  );

}

export default Child;