import React, { Component } from 'react'

export class EventHandlingClass extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }
      //  this.show = this.show.bind(this);
    }
    show= ()=>{
        console.log('show... class');
        this.setState({
            count:2
        })
      }

    render() {
        return (
            <div>{this.state.count}<br/>
                {/* <button onClick={this.show}>click</button> not working*/} 
                {/* <button onClick={this.show.bind(this)}>click</button> */} 
                {/*<button onClick={()=>this.show()}>click</button>*/}
                {/*<button onClick={this.show}>click</button> better approach */}
                <button onClick={this.show}>click</button>

            </div>
        )
    }
}

export default EventHandlingClass