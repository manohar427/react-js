import React from 'react';
import './App.css';


class  App3 extends React.Component {

state={name:'ABC'}


abc() {
    let person = {
        name: 'John Doe',
        getName: function() {
            console.log(this.name);
        }
    };
    
    console.log(person.getName  );
    console.log(this);
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

export default App3;
