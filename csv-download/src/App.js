import React from 'react';
import './App.css';
import { CSVLink } from "react-csv";
 
const csvData = [
  ["FirstName", "Last Name", "Email Test"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];


function App() {
  let filename = "Downoad"+new Date().toString()+".csv"
  return (
    <div className="App">
      <CSVLink data={csvData} target="_blank" className="btn btn-success" filename={filename}>Download me</CSVLink>
    </div>
  );
}

export default App;
