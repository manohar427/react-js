import React from 'react';
import './App.css';

import jwt from 'jsonwebtoken';
import { withCookies, Cookies } from 'react-cookie';


  class App extends React.Component {

    oauth = ()=>{
      document.cookie = "ABC=345677";

    }

    showCookie = () =>{
      //setCookie("UIYT", "UUUUUU", {
        //'max-age': 45286
      //})
      document.cookie = "ABC=12345";
      document.cookie = "user=John; max-age=20";
      document.cookie = "IDE=John; max-age=20";

      let cs = document.cookie;
      alert(cs);
      //alert(111);
     // let cc = new Cookies();
      //cc.set
    }
    render() {
      return (
        <div className="App">
          HI
          <button onClick={this.oauth.bind(this)}>OAUTH</button><br/>
          <button onClick={this.showCookie.bind(this)}>OAUTH</button>
        </div>
      );
    }
}

export default App;