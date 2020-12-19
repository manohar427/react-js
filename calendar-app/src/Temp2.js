import './App.css';
import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Temp2 extends React.Component {

  state = {startDate:new Date()}
  setStartDate = (e)=>{
    //alert('ok');
   // this.setState({
     // startDate:e.target.value
   // })
  }

  isWeekday = date => {
    let odddays = this.props.odddays;
    let flag = true;
    let date1 = new Date(date);
    let day = date1.getDay();
    
    if(odddays !== undefined && odddays !== null){
      for(let i=0;i<odddays.length;i++){
        if(odddays[i] === day){
          flag = false;
          break;
        }
      }
    }
    return flag;
  };

  render() {
    return (<div>
              <DatePicker 
              selected={this.state.startDate} 
              onChange={date => this.setStartDate(date)} 
              filterDate={this.isWeekday}
              />
            </div>)
  }
}
export default Temp2;