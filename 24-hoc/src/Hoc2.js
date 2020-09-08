import React,{Component} from 'react';

import withCounter from './ClickCounter';

class Hoc2 extends Component {
  
    render() {
        let {counter,increment,name} = this.props;
        return ( <>
            <div>               
                <button onMouseOver={increment}>{name} count is {counter}</button>
            </div>
        </>);
    }
}
export default withCounter(Hoc2);