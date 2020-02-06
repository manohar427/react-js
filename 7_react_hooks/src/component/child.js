import React,{Component} from 'react';

class Child extends Component {

  constructor(){
  super();
  console.log('Child constructor');
}

UNSAFE_componentWillMount(){
  console.log('Child componenetWillMount');
}

UNSAFE_componentWillReceiveProps(){
  console.log('child UNSAFE_componentWillReceiveProps');
}
shouldComponentUpdate(a,b){
  return true;
}
componentDidMount(){
  console.log('Child componentDidMount');
}

UNSAFE_componentWillUpdate(){
  console.log('child UNSAFE_componentWillUpdate');
}

componentDidUpdate(){
  console.log('child componentDidUpdate');
}

componentWillUnmount(){
  console.log('child componentWillUnmount');
}

 render(){
     console.log('Child render()');
  return (
    <div className ="App">
  Child-  {this.props.name}
    </div>
  );
}
}

export default Child;
