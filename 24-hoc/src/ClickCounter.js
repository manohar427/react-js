import React,{Component} from 'react';

const withCounter = WrappedComponent=>{
    class NewComponent extends Component {   

        state = {counter:0}
        increment=()=>{
            this.setState(x=>{
                return {counter:x.counter+1}
            })
        }
        render() {         
            // console.log(this.props.name)   
            let {counter} = this.state;
            return (<WrappedComponent counter={counter} increment={this.increment} {... this.props}/>);
        }
    }
    return NewComponent;
}

export default withCounter;