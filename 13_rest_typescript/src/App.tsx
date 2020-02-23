import React,{Component} from 'react';
import './App.css';
import Test from './components/Test';
import TestFunction from './components/TestFunction';

class  App extends Component {
  render(){
        return (
        <div className="App">
          <Test  isDoingJob={true}/>
          <TestFunction name={'XXXX'} />
        </div>
      );
   }
}

export default App;
