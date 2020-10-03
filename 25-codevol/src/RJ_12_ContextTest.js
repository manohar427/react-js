import React, { Component } from 'react';
import {MyContext} from './RJ_12_ComtextMain';


class RJ_12_ContextTest extends Component {
    render() {
        return (
            <div>
               <MyContext.Consumer>
                    {userName => { return ( <div>Hello {userName} </div>) } }
                </MyContext.Consumer>
            </div>
        )
    }
}
export default RJ_12_ContextTest