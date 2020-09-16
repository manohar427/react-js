import React, { Component } from 'react'

import Child from './Child';
export class ParentComp extends Component {

    constructor(){
        super()
        this.show = this.show.bind(this)
    }
    show(data){
        alert(`ok ${data}`);
    }
    render() {
        return (
            <div>
                <Child show={this.show}/>
            </div>
        )
    }
}

export default ParentComp
