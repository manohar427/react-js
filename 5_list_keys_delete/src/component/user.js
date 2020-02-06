import React,{Component} from 'react';
class User extends Component {

  render(){
    return (<div className ="App">
          <li>{this.props.name},{this.props.age}</li>
          <button onClick={this.props.delUser}>Delete</button>
    </div>
  )}
}

export default User;
