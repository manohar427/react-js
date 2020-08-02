import React, { Component } from 'react';
import { connect } from "react-redux";

class App extends Component
{ 
  render(){
    return (
      <>
        A:<span>{this.props.aX}</span>
        <button onClick={()=>this.props.updateA()}>Update A</button><br></br>

        B:<span>{this.props.bX}</span>
        <button onClick={()=>this.props.updateB()}>Update B</button><br></br>

      </>
    );
  }
}

const mapStoreToProps = (store)=>{
  return{
      aX:store.rA.a,
      bX:store.rB.b
  };
};

const mapDispachToProps = (dispatch)=>{
  return{
      updateA:()=>{dispatch({type:'UPDATE_A'})},
      updateB:()=>{dispatch({type:'UPDATE_B'})}
  };
};

export default connect(mapStoreToProps,mapDispachToProps)(App);
