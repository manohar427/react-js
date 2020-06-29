import React, { Component } from "react";
import Item from "./Item";

import randomstring from 'randomstring';
class Items extends Component {
  state = {
  //  items: [{ id: 1, value: 0 }, { id: 2, value: 10 }, { id: 3, value: 0 }]
  items:[]
  //currentCount:0
  };
 
  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
  // alert(itemId);
  // this.state.items.splice(itemId,1);
    this.setState({ items:items
       // currentCount:this.state.items.length
     });
  };
 
  addCountry= ()=>{
    this.setState({items: [...this.state.items,{ id: this.state.items.length+1, value: this.state.items.length+1 }]
      //  currentCount : this.state.items.length+1
    });
    this.getrandom();
  }
  getrandom=()=>{
    var x = randomstring.generate({
        length:8,
        charset: 'alphanumeric'
      });
      console.log("RRRRRRRRRRRRRRRR:"+x);
  }
  render() {
    return (
      <>
        {this.state.items.map((item,index) => (
          <Item 
          key={item.id} 
          onDelete={this.handleDelete} 
          item={item}
          index={index} 
          />
        ))}
<hr/>
<button onClick={(e)=>this.addCountry(e)}>Add Country</button>
      </>
    );
  }
}
 
export default Items;