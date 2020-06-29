import React from 'react';
import logo from './logo.svg';
import './App.css';

import Countries from './Countries';


class App extends React.Component {
  state = {
      countries:[],
      history:{
        added:0,
        deleted:0
      }
  }


  addCountry= ()=>{
    console.log('Current Counties:'+this.state.countries.length);
    this.setState({countries: [...this.state.countries,"kkk"]});
  /*  let addC = this.state.history.added;
    let history = this.state.history;
    addC +=1;
    history.added = addC;
    this.setState({
      history:history
    });
    console.log('Current Counties:'+this.state.countries.length);*/
  }
  handleChange=(e,index)=>{
   this.state.countries[index] = e.target.value;
   this.setState({countries:this.state.countries});
  }
  handleRemove(lindex){
    alert('Remove Index:'+lindex);
  /*  this.state.countries.splice(index,1);
    console.log(JSON.stringify(this.state.countries),"$$$$$");
    this.setState({countries:this.state.countries});*/

    const countries = this.state.countries.filter(index => 
      {
        alert("INDEX"+index);
        alert("LINDEX:"+lindex);
      }
      
      );
    this.setState({ countries: countries });
/*
    let addC = this.state.history.added;
    let history = this.state.history;
    addC -=1;
    history.added = addC;
    this.setState({
      history:history
    });
*/
  }
  showInfo= ()=>{
    alert(JSON.stringify(this.state));
  }
  render() {
let ccc= this.state.countries.map((country,index)=>{
  return(
        <Countries index={index} 
                   key={index} 
                   country={country} 
                   handleChange={this.handleChange.bind(this)}
                   handleRemove={this.handleRemove.bind(this)}
        />);
 })
   
    return (
      <div className="App">
         <h1>The Form</h1>
         <label>Address</label>
         <hr/>
         <button onClick={(e)=>this.addCountry(e)}>Add Country</button>
         <hr/>
        
       
         <button onClick={(e)=>this.showInfo(e)}>Submit</button>
        {ccc}
        <Abc name='ABC'/>
      </div>
    )
  }
  
}

function Abc(props) {
  return <h1>Hello, {props.name}</h1>;
}


export default App;