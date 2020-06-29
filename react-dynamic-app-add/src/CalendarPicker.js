import React from 'react';
import logo from './logo.svg';
import './App.css';
import RCdatepicker from './RCdatepicker';
import ReactInputCalendar from './ReactInputCalendar';

class CalendarPicker extends React.Component {
  
  render() {
    return (
      <div className="App">
        <RCdatepicker/>
        <hr/>
        <ReactInputCalendar/>
      </div>
    )
  }
  
}
export default CalendarPicker;