import React from 'react';
import './App.css';
import { CSVLink } from "react-csv";

 
const data = [
  ["FirstName", "Last Name", "Email Test"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

class App extends React.Component{
   
  constructor() {
    super();
    this.csvClick = null;
    this.setcsv = element => {
      this.csvClick = element;
    };
  }
  focusTextInput=(e)=> {
   // if (this.csvClick) 
    this.csvClick.link.click();
};
  render() {

 return (<>
    <CSVLink data={data} filename="test.csv"  ref={this.setcsv} target="_self"  ></CSVLink>
      <input
          type="button"
          value="Export to CSV"
          onClick={this.focusTextInput.bind(this)}
    />
 </>)
  }  
}

export default App;