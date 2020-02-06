import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route,NavLink,Redirect,Prompt} from 'react-router-dom';

const User         = (params) =>{
  return (<h1>User {params.username}</h1>);
}

class App extends Component {
  state = {
    loggedIn:false
  }

  loginHandler= () =>{
    this.setState(preState => ({
      loggedIn:!preState.loggedIn
    }));
  }
  render(){
    console.log('L:'+this.state.loggedIn);
  return (

    <Router>
    <div className ="App">

    <ul>
         <li>
                <NavLink to="/" exact activeStyle=
                {
                  {color:'yellow'}
                }
                  >Home</NavLink>
         </li>
         <li>
               <NavLink to="/about" exact activeStyle=
               {
                 {color:'yellow'}
               }
               >About</NavLink>
         </li>
         <li>
              <NavLink to="/user/manohar" exact activeStyle=
              {
                {color:'yellow'}
              }>User-1</NavLink>
         </li>
         <li>
              <NavLink to="/user/Mahi" exact activeStyle=
              {
                {color:'yellow'}
              }>User-2</NavLink>
         </li>
    </ul>

    <button  onClick={this.loginHandler.bind(this)}>{this.state.loggedIn ?'Logout':'Login'}</button>
      <Route path  ="/" exact strict render={
          ()       =>{
          return (<h1>
                   Home
                </h1>
          )
        }
      }>
      </Route>

      <Route path  ="/about" exact strict render ={
          ()       =>{
          return (<h1>
                   About
                </h1>
          )
        }
      }>
      </Route>

      <Route path  ="/user/:username" exact strict render={({match}) => (
        this.state.loggedIn ?(<User username={match.params.username}/>) :(<Redirect to="/"/>)
      ) }>
      </Route>

      <Prompt when={!this.state.loggedIn} message={(loc) => {
        return loc.pathname.startsWith('/user') ? 'are you sure ' :true
      }}/>
    </div>
    </Router>
  );
}
}

export default App;
