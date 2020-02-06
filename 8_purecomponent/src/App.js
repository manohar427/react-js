import React,{Component,PureComponent} from 'react';
import './App.css';

const Temp =(p)=>{
console.log('temp render');
  return (
    <div>
       {p.score}
    </div>
  )
}

class App extends PureComponent {

state= {
    score:1
}

componentDidMount(){
  console.log('Componenet did mount');
  setInterval(
    ()=>{
        this.setState(()=>{
        return {score:2}
        });
    },
    2000
  )
}
/*shouldComponentUpdate(np,ns){
  console.log('shouldComponentUpdate');
      return ns.score===this.state.score ?false:true;
}*/
 render(){
   console.log('render');
      return (
        <div className ="App">
            <Temp score={this.state.score}></Temp>
        </div>
      );
   }
}

export default App;
