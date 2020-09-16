import React, { PureComponent,Component } from 'react'

class PureComp extends Component {
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
        console.log('render called ...')
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}

export default PureComp
