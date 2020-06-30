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
  state = {
    flag:false
  }

  
  constructor(props) {
    super(props);

    this.csvClick = null;
    this.setcsv = element => {
      this.csvClick = element;
    };

 /*   this.focusTextInput = () => {

    if (this.csvClick) 
        this.csvClick.link.click();
    };
  }*/
  }
  focusTextInput=(e)=> {
    if (this.csvClick) 
    this.csvClick.link.click();
};
  render() {

 return (<>
  <CSVLink data={data} filename="test.csv"  ref={this.setcsv} target="_self" ></CSVLink>
  

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput.bind(this)}
        />
 
 </>)
  }
  
}


export default App;
