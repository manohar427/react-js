
import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCalendar,faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


export default function Abc(){

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
      <input  onClick={onClick} value={value} className="form-control test">
       
      </input>
    );
    return ( <>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </>);
 }