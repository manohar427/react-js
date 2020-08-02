import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import Button from 'react-bootstrap/Button';


class ToggleDemo extends React.Component {
  state = { toggleShow: true};
 
  onToggle1 = () => {
    this.setState({ toggleShow: !this.state.toggleShow });
  };

  render() {
    const menyStyleOn =   this.state.toggleShow?"menu-off":"menu-on";
    const menyStyleOff = !this.state.toggleShow?"menu-off":"menu-on";
    return (
      <>
        <button data-tip='' data-for='test' data-place="right">PARA</button>
<ReactTooltip id='test'>tttttt</ReactTooltip>


<Button variant="link">Link</Button>

        <div className={menyStyleOn}>
          <br/>
         <a onClick={this.onToggle1} href="#" className="testArrow">{this.state.toggleShow?"<":">"}</a>
         <br/>Pannel - Expand 
         <br/>
         sadas
         aslasfaksl
         asdash;defaultasd
         <input type='text'/>

        </div>
        <br/>
        <div className={menyStyleOff}>
         <a onClick={this.onToggle1} href="#" className="testArrow">{this.state.toggleShow?"<":">"}</a>
        </div>
        <br/>
        <div className="abc">
        <p>User Operations</p>
        </div>
      </>
    );
  }
}

export default ToggleDemo;
