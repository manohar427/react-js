import React from 'react';
const myFuncComp = (props)=>{
  let age = props.age ? props.age:'NA';
  if(props.children){
    return (<div>Name:{props.children},Age:{age}</div>);
  }else{
    return (<div>Invalid User</div>);
  }

}

export default myFuncComp;
