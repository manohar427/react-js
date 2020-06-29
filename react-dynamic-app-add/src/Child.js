import React from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends React.Component {

  
  render() {
    return (
        <div key={this.props.index}>
           <input value={this.props.country} onChange={(e)=>this.props.handleChange(e,1)}></input>
          <button onClick={()=>this.props.handleRemove(index)}>Remove</button>
        </div>
    )
  }
  
}
export default Child;