import React, { Component } from 'react'

export class InLineStylpe extends Component {
    constructor(){
        super()
    }   
    render() {
        let mystyle = {
            fontSize:'30px',
            color:'red'
        }
        return (
            <div>
                <div style={mystyle}>sdddddd</div>
            </div>
        )
    }
}

export default InLineStylpe