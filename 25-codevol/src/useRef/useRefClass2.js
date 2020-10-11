import React, { Component } from 'react'

export default class useRefClass2 extends Component {

    intvl;
    constructor(){
        super()
        this.state = {count:0}
    }
    componentDidMount(){
        this.intvl = setInterval(() => {
            this.setState(c=>({
              count:c.count+1  
            }))
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intvl)
    }
    render() {
        return (
            <div>
                {this.state.count}    <br/>
                <button onClick={()=>clearInterval(this.intvl)}>Reset</button>
            </div>
        )
    }
}
