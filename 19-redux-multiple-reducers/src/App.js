import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component
{ 
  render(){
    return (
      <>
        A:<span>{this.props.aX}</span>
        <button onClick={()=>this.props.updateA(this.props.bX)}>Update A</button><br></br>

        B:<span>{this.props.bX}</span>
        <button onClick={()=>this.props.updateB(this.props.aX)}>Update B</button><br></br>

      </>
    );
  }
}

const mapStoreToProps = (ABC)=>{
  return{
      aX:ABC.rA.a,
      bX:ABC.rB.b
  };
};

const mapDispachToProps = (dispatch)=>{
  return{
      updateA:b=>{dispatch({type:'UPDATE_A',b:b})},
      updateB:a=>{dispatch({type:'UPDATE_B',a:a})}
  };
};

export default connect(mapStoreToProps,mapDispachToProps)(App);
