import React from 'react';

import './App.css';

class App extends React.Component {
  state = {
      countries:[]
  }
  
  addCountry= ()=>{
    console.log('Current Counties:'+this.state.countries.length);
    this.setState({countries: [...this.state.countries,this.state.countries.length]});
    
  }
  
  handleChange= (e,index)=>{
   this.state.countries[index] = e.target.value;
   this.setState({countries:this.state.countries});
  }

  handleRemove=(index)=>{
    this.state.countries.splice(index,1);
    console.log(JSON.stringify(this.state.countries),"$$$$$");
    this.setState({countries:this.state.countries});
  }
  
  render() {
    return (
      <div className="App">
         <h1>The Form</h1>
         <label>Address</label>
         <hr/>
         <button onClick={(e)=>this.addCountry(e)}>Add Country</button>
         <hr/>
         {
            this.state.countries.map((country,index)=>{
            return(
                    <div key={index}>
                        <input value={country} onChange={(e)=>this.handleChange(e,index)}></input>
                        <button onClick={()=>this.handleRemove(index)}>Remove</button>
                    </div>
                  );
           })
         }
       
         <button>Submit</button>
      </div>
    )
  }
  
}
export default App;
