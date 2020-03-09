import React from 'react';

import SingleList from './SingleList';

class ListDemo extends React.Component {

    render() {        
        
        var propsData = this.props.p;

        console.log("DATA:"+JSON.stringify(propsData));   
        
        if(propsData.subList){
            return(
                <div className="App">
                    <li >
                    {this.props.p.lab}
                        <ul className="sl">
                        <SingleList p={this.props.p}></SingleList> 
                        </ul>
                    </li>
                </div>
            );
        } else{
            return(
                <div className="App">
                    <li className='parentLi textstyle'><a href='#'>{this.props.p.lab}</a></li>
                </div>
            );
        }                                       
    }
  }
  export default ListDemo;  