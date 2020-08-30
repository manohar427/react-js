import React,{useState,useEffect} from 'react';

function ObjectDemo() {
   
  function initialset(){
    console.log('initial set called ');
    return {count:0,color:'red'};
  }
  const [obj, setc] = useState(()=>initialset());
  let color = obj.color;
  let count = obj.count;
  useEffect(() => {
    document.title = `You clicked ${count} - ${color} times`;  
  });
  function myIfunction(){
    setc(obj=> {
      return {...obj,count:obj.count+1}    
    })
  }

  function myDfunction(){
    setc(obj=> {
      return {...obj,count:obj.count-1}    
    })
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={myIfunction}>
        Click me +
      </button>
      <button onClick={myDfunction}>
        Click me -
      </button>
    </div>
  );
}

export default ObjectDemo;
