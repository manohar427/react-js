import React,{useState,useEffect} from 'react';

function App() {
  //const [count, setc] = useState(0);
   
  function initialset(){
    console.log('initial set called ');
    return 0;
  }
  const [count, setc] = useState(()=>initialset());

  useEffect(() => {
    document.title = `You clicked ${count} times`;  
  });
  function myIfunction(){
    setc(count=>count+1)
  }

  function myDfunction(){
    setc(a=>a-1)
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

export default App;
