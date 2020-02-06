import React,{Component} from 'react';
import './App.css';
import User from './component/user';
import nextId from "react-id-generator";

class App extends Component {

  state                          = {
    users: [
      {
        id:nextId(),
        age:10,
        name:"Abc"
      },
      {
        id:nextId(),
        age:15,
        name:"Pqr"
      },
      {
        id:nextId(),
        age:20,
        name:"Def"
      }

    ]
  }

delUser                          = (index,e)=>{
             const users = Object.assign([],this.state.users);
             users.splice(index,1);
             this.setState({
               users:users
             });
}
  render(){
    console.log(this.state.users);
    return (<div className       ="App">
           <ul>
                {
                  this.state.users.map(
                    (user,index) =>{
                    return (<User
                      key        ={user.id}
                      name       ={user.name}
                      age        ={user.age}
                      delUser    ={this.delUser.bind(this,index)}
                      ></User>)
                    }
                  )
                }
           </ul>
    </div>
  )}
}

export default App;
