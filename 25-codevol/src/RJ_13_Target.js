import React, { Component } from 'react'

class RJ_12_Target extends Component {

    constructor(props) {
        super(props)
        this.state = {
             id:''
        }
    }
    
    handler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    showData = (e)=>{
        alert(JSON.stringify(this.state))
    }
    render() {
        return (
            <div>
                <input type='text' name='id' onChange={this.handler}/>
                <button onClick={this.showData}>OK</button>
            </div>
        )
    }
}
export default RJ_12_Target