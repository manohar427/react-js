import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TimePicker from 'react-time-picker';

class App extends Component {
  state = {
    time: '13:05:10',
  }
 
  onChange = x =>{
    console.log(x);
    this.setState({ time:x })
  } 
 
  render() {
    return (
      <div>
        <TimePicker
          onChange={this.onChange}
          value={this.state.time}
          format="HH:mm:ss"
          clearIcon={null}
          disableClock={true}
          maxDetail="second"
        />
        <br/>
        Time:{this.state.time}
      </div>
    );
  }
}
export default App;
