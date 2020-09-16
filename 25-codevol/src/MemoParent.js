import React, { Component } from 'react'
import ReactMemo from './ReactMemo';

class MemoParent extends Component {

    constructor(){
        super()
        this.state = {name:'abc'}
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({name:'pqr'});
            console.log('state changed....')
        }, 2000);
    }

    render() {
        return (
            <div>
                <ReactMemo name={this.state.name}/>
            </div>
        )
    }
}

export default MemoParent
