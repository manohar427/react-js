import React from 'react';
export default class Child100 extends React.Component {
   /* constructor(props) {
        super(props);
        this.getAlert = this.getAlert.bind(this);
     }*/
     componentDidMount() {
        this.props.setClick(this.getAlert);
     }
     getAlert() {
        alert('i am from Child');
     }
     render() {
      return (
        <h1>Hello</h1>
      );
     }
}