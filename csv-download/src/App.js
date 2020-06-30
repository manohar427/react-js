import React from 'react';
import './App.css';
import { CSVLink,CSVDownload } from "react-csv";
import axios from 'axios';
 
const data = [
  ["FirstName", "Last Name", "Email Test"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];


//let csvLinkRef = React.createRef();
class App extends React.Component{
  state = {
    flag:false
  }

  
  constructor(props) {
    super(props);

    //this.textInput = null;
    this.csvClick = null;

    /*
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    */
    //setcsv
    this.setcsv = element => {
      this.csvClick = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) 
      this.textInput.focus();

    if (this.csvClick) 
        this.csvClick.link.click();
    };
  }

  focusTextInput() {
   
  }
 
  render() {

 return (<>
  <CSVLink data={data} filename="test.csv"  ref={this.setcsv} target="_self" >OK</CSVLink>
  <br/>

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
 
 </>)
  }
  
}


export default App;
