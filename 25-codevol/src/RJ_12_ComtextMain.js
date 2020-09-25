import React, { Component } from 'react'
//import MyContext from './RJ_12';
import RJ_12_ContextTest from './RJ_12_ContextTest';

const MyContext = React.createContext();

class RJ_12_ComtextMain extends Component {    
    render() {
        let data = 'test data';
        return (
            <div>
                <MyContext.Provider value={'kkkkkk'}>
                    <RJ_12_ContextTest/>
                </MyContext.Provider>
            </div>
        )
    }
}
export default RJ_12_ComtextMain
export {MyContext}