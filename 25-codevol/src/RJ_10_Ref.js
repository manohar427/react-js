import React, { Component } from 'react'

class RJ_10_Ref extends Component {
    constructor(props){
        super(props)
        this.iref = React.createRef();
    }
    componentDidMount(){
        this.iref.current.focus();
    }
    showData = ()=>{
        alert(this.iref.current.value);
    }
    render() {
        return (
            <div>               
                <input type='text' ref={this.iref}/><br/>
                <input type='button' onClick={this.showData} value='ok'/><br/>
            </div>
        )
    }
}
export default RJ_10_Ref