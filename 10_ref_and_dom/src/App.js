import React,{Component} from 'react';
import './App.css';


class App extends Component {

onKeyUp = (val,e)=>{
        if(val === "fn" && e.keyCode ===13){
          this.lastName.focus();
        }else if(val === "ln" && e.keyCode ===13){
  this.age.focus();
}else if(val === "age" && e.keyCode ===13){
  this.submit.focus();
}else{
  this.firstName.focus();
}
}
  render(){
  return (
<>
<span>FirstName:<input type='text' ref={(input)=>{this.firstName=input}} onKeyUp={this.onKeyUp.bind(this,'fn')}/></span><br/>
<span>LastName:<input type='text' ref={(input)=>{this.lastName=input}} onKeyUp={this.onKeyUp.bind(this,'ln')}/></span><br/>
<span>Age:<input type='text' ref={(input)=>{this.age=input}} onKeyUp={this.onKeyUp.bind(this,'age')}/></span><br/>
<span><input type='button' value='Submit' ref={(input)=>{this.submit=input}} onKeyUp={this.onKeyUp.bind(this,'su')}/></span><br/>
</>

  );
}
}

export default App;
