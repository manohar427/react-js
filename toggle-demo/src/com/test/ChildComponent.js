import React, { Component } from 'react';


export default class ChildComponent extends Component {
   
    constructor (props) {
       super(props);
    
    };
 
    onClick = () => (console.log('OK'));
 
    render () {
       const { onSubmit, label} = this.props;
       return(
         <div >
           <button >{label}</button>
         </div>
       );
    };
 };