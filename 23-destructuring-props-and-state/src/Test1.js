import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test';

//function App(props) {
//function App({a,b}) {
  class Test1 extends React.Component{
//function App(props) {
  render(){

    const {a,b} = this.props;
  return (
    <div className="App">
     {a} - {b} 
    </div>
  );
}
  }
export default Test1;
