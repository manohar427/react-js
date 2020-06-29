import React,{ useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ReactDatePicker extends React.Component {
    state = {
        startDate: new Date(),
        vvv:'ok'
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
       // alert(this.state.startDate);
      };
      showDate = ()=>{
          alert(this.state.startDate);
      }
     
      openDatepicker = () => this._calendar.setOpen(true);

      render() {
        return (<>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showPopperArrow={true}
            dateFormat="dd.MM.yyyy"            
            className="test"
          />
          <hr/>
          <DatePicker
              ref={(c) => this._calendar = c} />

<label onClick={this.openDatepicker} >OOOOO</label>

          

          </>

          
        );  
        }
}
export default ReactDatePicker;