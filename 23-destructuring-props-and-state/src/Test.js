import React from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test';

//function App(props) {
//function App({a,b}) {
function App(props) {
    let {a,b} = props;
  return (
    <div className="App">
     {a} - {b} 
    </div>
  );
}

export default App;
