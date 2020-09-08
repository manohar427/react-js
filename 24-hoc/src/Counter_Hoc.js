import React,{Component} from 'react';

import Hoc from './Hoc';
import Hoc2 from './Hoc2';

class Counter_Hoc extends Component {
  render() {
    return ( <>
      <div>
          <Hoc name='Abc'/>
          <Hoc2 name='Pqr'/> 
      </div>
    </>);
  }
}
  export default Counter_Hoc;