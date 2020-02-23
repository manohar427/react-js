import * as React from 'react';
import './../App.css';

export interface MyClassProps{
  name?:string;
  isDoingJob:boolean;
}

export interface MyClassState{
  age:number;
}

class  Test extends React.Component<MyClassProps,MyClassState> {
  public static defaultProps:Partial<MyClassProps> = {
    name : "Mahi S"
  }
  state = {
    age:78
  };
  render(){
        return (
        <div className="App">
          <h1>Name:{this.props.name}</h1>
          <h1>Is Job:{this.props.isDoingJob ?"Y":"N"}</h1>
          <h1>Age:{this.state.age}</h1>
        </div>
      );
}
}

export default Test;
