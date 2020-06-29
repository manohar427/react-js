import React from 'react';

import Child100 from './Child100';
export default  class Parent extends React.Component {
    render() {
        return (
          <div>
            <Child100 setClick={click => this.clickChild = click}/>
            <button onClick={() => this.clickChild()}>Click</button>
          </div>
        );
       }
}