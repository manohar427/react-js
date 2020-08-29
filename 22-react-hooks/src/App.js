import React,{useState,useEffect} from 'react';

function App() {
  const [count, setc] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;  
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setc(count - 1)}>
        Click me +
      </button>
      <button onClick={() => setc(count - 1)}>
        Click me -
      </button>
    </div>
  );
}

export default App;
