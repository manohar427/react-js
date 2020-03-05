import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
     axios.get('https://jsonplaceholder.typicode.com/users').then(re=>{
       console.log(re);
     });
   console.log('OK');
  }
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default App;