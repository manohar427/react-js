import React from 'react';
function Countries(props) {
    let index = props.index;
    return(
        <div key={index}>
          DRop downs here Index:{index} <br/>
          <input type="text"></input>    <br/>
          <button onClick={()=>props.handleRemove(index)}>Remove</button>       
        </div>
      );
  }
  export default Countries;