import React,{Component} from 'react';
import './App.css';
import Child from './component/child';

class App extends Component {

    state              = {
  name:"Manohar"
}
constructor(){
  super();
  console.log('constructor');
  this.state           = {
    name:"Manohar S"
  }
}

UNSAFE_componentWillMount(){
  console.log('componenetWillMount');
  if(window.innerWidth <400){
    this.setState({
      innerWidth:window.innerWidth
    });
  }
}

componentDidMount(){
  console.log('componentDidMount');
}

UNSAFE_componentWillUpdate(){
  console.log('UNSAFE_componentWillUpdate');
}

UNSAFE_componentWillReceiveProps(){
  console.log('UNSAFE_componentWillReceiveProps');
}

shouldComponentUpdate(np,ns){
  console.log('shouldComponentUpdate:'+JSON.stringify(ns));
  return true;
}

componentDidUpdate(pp,ps){
  console.log('componentDidUpdate'+JSON.stringify(ps));
}

componentWillUnmount(){
  console.log('componentWillUnmount');

}

changeState(){
  this.setState(
    {
      name:"asas"
    }
  );
}

unmount(){
    this.setState({name:"xxx"});
}
 render(){
   if(this.state.name === "xxx"){
     return <div/>
   }
     console.log('render()');
      return (
        <div className ="App">
            HI-{this.state.name} <br/>
            {
              this.state.innerWidth
            }
            <button onClick={this.changeState.bind(this)}>Change State</button>
            <button onClick={this.unmount.bind(this)}>Unmount</button>
           <Child name ={this.state.name}></Child>
        </div>
      );
   }
}

export default App;
