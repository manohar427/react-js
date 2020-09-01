import React,{useState,useEffect} from 'react';

function SpreadOperator() {
 
  const [count, setc] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;  
  });
  function myIfunction(){
/*      let fname = ['manohar','sambayyapalem'];
      let address = ['blr','in'];
      let bdata = [1,...fname,30,...address];

      console.log(JSON.stringify(bdata));
      console.log("Six Feet Under", "Chernobyl", "Black Mirror", "Fleabag")
*/

   /* const originals = ["Mona Lisa", "American Gothic", "The School of Athens"];
    const copies = [...originals];

    originals.push("Nighthawks");
    copies.push(0);
    console.log(copies);
    console.log(originals);
*/
const todos = [
	{user: "Brick", completed: false, task: "Upload Video"},
	{user: "Lilith", completed: true, task: "Rob Bank"}
]

let newTodo = {user: "Mordecai", task: "Feed Bloodwing"}

let newTodoList = [...todos,{...newTodo,completed:false}]

console.log('todo list:'+JSON.stringify(newTodoList));
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

export default SpreadOperator;
