import React from 'react';

import ListDemo from './com/ListDemo';

function App() {
  const list = [
    {
      id:1,
      lab:'ABC',
      subList:false
    },
    {
      id:2,
      lab:'More Here',
      subList:true,
      subEle:[
        {
          id:21,
          lab:'MORE-1',
          subList:false
        },
        {
          id:22,
          lab:'MoRE-2',
          subList:false
        }
      ]
    },
    {
      id:3,
      lab:'DEF',
      subList:true,
      subEle:[
        {
          id:31,
          lab:'MORE-11',
          subList:false
        }
      ]
    },
    {
      id:4,
      lab:'ABCDEF-VVVVVVVVVVVVVVVVVVVVVVVV',
      subList:false
    }
  ];
  
  const flist = list.map((e)=> {    
        return (<ListDemo key={e.lab} p={e}></ListDemo>);      
    }
  );

  return (
    <>    
    <h1>List Demo</h1>
      <ul className="parentList textstyle">
        {flist}
      </ul>
    </>
  );
}

export default App;




















