import React,{Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Test =(p)=>{
  return (<div>
<h1>{p.str}</h1>
<h1>{p.bool?"Y":"N"}</h1>
<h1>{p.strOrNum}</h1>
<h1>{p.arr.map(p=>{
  return (<li key={p}>{p}</li>)
})}</h1>

<h1>{p.arrOfObj.map(p=>{
  return (<li key={p.age}>{p.name}</li>)
})}</h1>
<h1>{p.children}</h1>


  </div>
  );
}

Test.propTypes = {
str:PropTypes.string,
strOrNum:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
bool:PropTypes.bool,
arr:PropTypes.arrayOf(PropTypes.number),
arrOfObj:PropTypes.arrayOf(PropTypes.shape({
  name:PropTypes.string,
  age:PropTypes.number
})),
children:PropTypes.element
}
class App extends Component {


  render(){
  return (
    <>
       <Test
       str="99"
       bool={false}
       strOrNum="STR OR NUM"
       arr={[1,2,3,4]}
       arrOfObj={[{age:10,name:"John"},{age:20,name:"Mike"}]}
       >
<div>
    Children
</div>
    </Test>
    </>
  );
}
}

export default App;
