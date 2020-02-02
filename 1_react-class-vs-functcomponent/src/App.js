import React,{Component} from 'react';
import './App.css';
import Users from './user/Users';

class App extends Component {
  render() {
    return <div className ="App">
                 <Users title="Users Information"></Users>
          </div>
     }
}

export default App;
