import React, {Component} from 'react';
export default class Child extends Component {
    getAlert() {
      alert('getAlert from Child');
    }
  
    render() {
      return <h1>Hello</h1>;
    }
  }
  