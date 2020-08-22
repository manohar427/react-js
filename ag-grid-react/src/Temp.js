import React, { Component } from 'react';
import './App.css';
//import TempComp from './TempComp';
//import TempComp1 from './TempComp1';


class Temp extends Component {

  constructor(props){
    super(props);
       //console.log('ADTAFTAATADT1:'+JSON.stringify(this.props.data.city));
       //console.log('ADTAFTAATADT2:'+JSON.stringify(this.props.data.model));
      // console.log('ADTAFTAATADT3:'+JSON.stringify(this.props.data));
       console.log('ID:'+JSON.stringify(this.props.node.id)+',MODEL:'+this.props.data.model+',CITY:'+this.props.data.city);
     // console.log('ADTAFTAATADT2:'+JSON.stringify(this.props.colDef));
     }
  
  render() {
    return (
      <div>Age: {this.props.node.id}</div>
    );
  }
}

export default Temp;