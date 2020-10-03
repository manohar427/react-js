import React, { Component } from 'react'
//import MyContext from './RJ_12';
import RJ_12_ContextTest from './RJ_12_ContextTest';

export const MyContext = React.createContext();

class RJ_12_ComtextMain extends Component {    
    render() {
        let data = 'test data 123456789';
        return (
            <div>
                <MyContext.Provider value={data}>
                    <RJ_12_ContextTest/>
                </MyContext.Provider>
            </div>
        )
    }
}
export default RJ_12_ComtextMain
