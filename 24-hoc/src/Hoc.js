import React,{Component} from 'react';

import withCounter from './withCounter';
class Hoc extends Component {
    render() {
        let {counter,increment,name} = this.props;
        return ( <>
            <div>
                <button onClick={increment}>{name} count is {counter}</button>
            </div>
        </>);
    }
  }
  export default withCounter(Hoc);