import React, { Component } from 'react';
import './App.css';
import TempComp from './TempComp';
import TempComp1 from './TempComp1';


class App extends Component {

  constructor(){
    super();
    this.state = ({
      cl1:"hide1",
      cl2:"hide1",
      cl3:"hide1",
      cl4:"hide1",
    })
  }
  cl1 = ()=>{
    this.setState({
cl1:"show1"
    });
  }
  cl2 = ()=>{
    this.setState({
cl2:"show1"
    });
  } 
  cl3 = ()=>{
    this.setState({
cl3:"show1"
    });
  }

  cl4 = ()=>{
    this.setState({
cl4:"show1"
    });
  }
  render() {
    return (
      <>
      
      <div className="test" style={{height:'100%'}}>
   
        <TempComp/>
      </div>
    </>
    );
  }
}

export default App;