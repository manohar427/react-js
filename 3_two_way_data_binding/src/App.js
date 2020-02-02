import React,{Component} from 'react';
import './App.css';

class App extends Component {

  state ={
    name:"Zest Prime"
  };

  clickme = ()=>{
  //  alert('OK');

    this.setState({
      name:"OK"
    });
  }

clickme1 = (value)=>{
//  alert('OK');
  this.setState({
    name:value
  });
}

clickme2 = (value)=>{
  this.setState({
    name:value
  });
}

clickMe3 = (event)=>{


  this.setState({
    name:event.target.value
  });
}

  render(){
  return(
    <div className="App">
          {this.state.name}
          <br/>
<button onClick ={this.clickme}>OK</button>
          <br/>
          <button onClick ={()=>this.clickme1('Zest Prime1')}>OK1</button>
          <br/>
          <button onClick ={this.clickme2.bind(this,'Zest Prime2')}>OK2</button>
          <br/>
          <input type="text" onChange={this.clickMe3} value={this.state.name}/>          
    </div>
  )
  }
}

export default App;
