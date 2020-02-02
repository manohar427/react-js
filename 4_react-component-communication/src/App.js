import React,{Component} from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';
class App extends Component {

  state = {
    title: "From Parent To Child"
  }
  doabc = (val) =>{
    this.setState(
      {
        title:val
      }
    );
  }
  render(){
    return (<div className ="App">
      Hi - <Parent title={this.state.title} dowhat={this.doabc.bind(this,'Change World')}/>
      <br/>
      Hi - <Parent title={this.state.title} dowhat={this.doabc.bind(this,'Keep World same')}/>
    </div>
  )}
}

export default App;
