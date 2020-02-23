import * as React from 'react';

//export interface MyClassProps{
type MyClassProps={
  name:string;
}


const TestFunction  = (p:MyClassProps)=> {
  return (
         <>
            Test :{p.name}
            
         </>
  );
}

export default  TestFunction;
