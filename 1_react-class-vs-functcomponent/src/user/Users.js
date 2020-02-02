import React,{Component} from 'react';

import User from './User';
class Users extends Component
{

  render(){
    return <div>
              Title:{this.props.title}
               <User>A</User>
               <User age="21"></User>
               <User age="22">C</User>
          </div>
  }
}

export default Users;
