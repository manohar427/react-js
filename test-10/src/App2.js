import React from 'react';
import './App.css';


class  App2 extends React.Component {

  state={name:'ABC'}

 abc() {
//  alert('1');
  console.log(this);
  this.setState({
    name:"Good Byee..."
  })
}

  render(){

    return (
      <div className="App">
        {
          this.state.name
        }
       {/*<button onClick={this.abc.bind(this)}>OK</button>*/}
      <button onClick={()=>this.abc()}>OK</button>
       {/*<button onClick={this.abc}>OK</button>*/}
      </div>
    );
  }
}

export default App2;
