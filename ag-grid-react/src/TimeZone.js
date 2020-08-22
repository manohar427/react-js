import React, { Component } from 'react';
import './App.css';


class TimeZone extends Component {

  
  
  render() {
      console.log('ok');
      let cd = new Date();
      let of = cd.getTimezoneOffset();
      console.log('OFFSET:'+of);
      cd.setMinutes(cd.getMinutes() - of);
      console.log('UTC:'+cd)
    return (
      <>
      
      <div className="test" style={{height:'100%'}}>
   hhhhhhhhhhhhhhh
       
      </div>
    </>
    );
  }
}

export default TimeZone;