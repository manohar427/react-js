import React, { Component } from 'react'

class TimerDemo extends Component {    
    state = {
        counter:0
    }
    constructor(){
        super()
        this.test = null;
    }
    setCount = ()=>{
        this.setState(cs=>{
            return {...this.state,
                counter:cs.counter+1
            }
        })
    }
    componentDidMount(){
        this.test =  setInterval(this.setCount,1000);
    }
    componentWillUnmount(){
        clearInterval(this.test)
        console.log('counter removed.................')
    }
    render() {
        return (
            <div>
                Counter:{this.state.counter}
            </div>
        )
    }
}
export default TimerDemo