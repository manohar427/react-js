import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCalendar,faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

class BootCal extends React.Component {
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
      toggle = () => {
        this.component.setOpen(true);       
    }
      openDatepicker = () => this._calendar.setOpen(true);
      render() {
        return (<>
        <br/>
           &nbsp;&nbsp; <div>              
                <div className="input-group">                
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange}
                        showPopperArrow={true}
                        dateFormat="dd.MM.yyyy"   
                        ref={(r) => {
                            this.component = r;
                        }}                     
                        className="test"
                        calendarClassName="calendarCss"                    
                    />
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <FontAwesomeIcon className="calIcon" 
                                icon={faCalendarAlt} size="lg" 
                                onClick={() => this.toggle()}/>
                        </span>
                    </div>                
                </div>
            </div>    
            <hr/>
            
            <div className="input-group">
                <div className="input-group-prepend">
                    AD:<div className="input-group-text">@</div>
                </div>
                <input type="text" className="test"></input>
            </div>          
        </>          
        );  
        }
}
export default BootCal;