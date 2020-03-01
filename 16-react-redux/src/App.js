import React,{Component} from 'react';
import './App.css';
import {connect} from "react-redux";

class  App extends Component {

  /*
state = {
  age:20
}
   
increment= ()=>{

  this.setState({
    ...this.state,
    age:this.state.age+1
  });
}

decrement= ()=>{

  this.setState({
    ...this.state,
    age:this.state.age-1
  });
}*/

  render(){
        return (
          <div className="App">
            <div>Age:{this.props.age}</div>
            <div>
              <button onClick={this.props.increment}>INCRE</button> &nbsp;
              <button onClick={this.props.decrement}>DECR</button></div>
          </div>
        );
   }
}

const mapStateToProps = (state) =>{
   return {
     age:state.age
   }
}

const mapDispachToProps = (dispatch) =>{
    return {
      increment:()=> dispatch({type:'INCR'}),
      decrement:()=> dispatch({type:'DECR'})
    }
}
export default connect(mapStateToProps,mapDispachToProps)(App);
