import React,{useState} from 'react';
import Calendar from 'react-input-calendar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





 
export default class ReactInputCalendar extends React.Component {

    
    constructor(props) {
        super(props);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        this.state = {
          yesterday,
          value: '2015-05-13'
        };
      }
    
      resetState() {
        this.setState({ value: null });
      }
    
      render() {
        return (
          <div>
            <p>jsDate = {String(this.state.value)}</p>
            <DatePicker
              className='my-react-datepicker'
              value={this.state.value}
              onChange={(jsDate) => this.setState({value: jsDate})}
              locale='fr'
              ic
            />
          </div>
        );
      }
    }