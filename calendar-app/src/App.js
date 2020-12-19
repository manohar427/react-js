import './App.css';
import React from 'react';

import Temp2 from './Temp2';
import Temp1 from './Temp1';
class App extends React.Component {

  state = {startDate:new Date()}
  setStartDate = (e)=>{
    //alert('ok');
   // this.setState({
     // startDate:e.target.value
   // })
  }

  isWeekday = date => {
    console.log("Props:"+this.props.odddays);
    let date1 = new Date(date);
    let day = date1.getDay();
    return day !==0 && day !==6 ;
  };

  render() {
    return (<div>              
              Date1:<Temp2 odddays={[0,1,6]}/>
              Date2:<Temp1 odddays={[3]}/>
            </div>)
  }
}
export default App;
