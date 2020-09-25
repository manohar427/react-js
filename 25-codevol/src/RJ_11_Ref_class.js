import React, { Component } from 'react'
import RJ_11_Ref_Child from './RJ_11_Ref_Child';

class RJ_11_Ref_class extends Component {
    constructor(){
        super()
        this.childRef = React.createRef();
    }
    callf1 = ()=>{
        this.childRef.current.f1();
    }
    callf2 = ()=>{
        this.childRef.current.f2();
    }
    render() {
        return (
            <>
                <RJ_11_Ref_Child ref={this.childRef}/>
                <button onClick={this.callf1}>f1</button><br/>
                <button onClick={this.callf2}>f2</button><br/>
            </>
        )
    }
}
export default RJ_11_Ref_class