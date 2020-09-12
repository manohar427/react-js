import React from 'react';
import './App.css';

function App() {
  function test1(){
    const arr1 = [1, 2, 3];
   let arr2 =  arr1.map(function(a){
      return <div>{a*a}</div>;
    });
    return arr2;
  }

  function test2(){
    const arr1 = [1, 2, 3];
   let arr2 =  arr1.map((a)=>{
      return <div>{a*a}</div>;
    });
    return arr2;
  }

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => <div>{2018 - year}</div>);

const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);

const arr100 = [5, 7, 1, 8, 4];

let sum = arr100.reduce((a,b)=>a+b)
  return (
    <div className="App">
      {test1()} <br/>
      {test2()} <br/>
      {ages} <br/>
  {fullAge.map(a=><div>{a.name}:{a.age}</div>)} <br/>
  sum:{sum} <br/>
    </div>
  );
}

export default App;
