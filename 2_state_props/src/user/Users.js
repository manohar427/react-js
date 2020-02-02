import React,{Component} from 'react';

import User from './User';
class Users extends Component
{
state                              = {
  users:[
    {
      name:"A",
      age:20
    },
    {
      name:"B",
      age:21
    },
    {
      name:"C",
      age:22
    }
  ],
  title:"Title Here"
}
   incrAge                         = ()=>{
  console.log('Click me');
              const newState       = this.state.users.map(
                    (user)         => {
                  //  const tempUser =user;
                    //tempUser.age -=10;
                    user.age = user.age-10;
                    return user;
               }
  );

  this.setState({users:newState});
  console.log('Users:'+JSON.stringify(this.state.users));
}

  render(){
    return <div>
                {this.state.title}
                <br/>
                <button onClick    ={this.incrAge}>ClickME</button>
              {this.state.users.map(
                (user)=>{
                return  <User age={user.age}>{user.name}</User>
                }
              )}
          </div>
  }
}

export default Users;
