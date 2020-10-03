import React from 'react'

import RJ_16_UseContext_2 from './RJ_16_UseContext_2';
export const User = React.createContext();
export const TestUser = React.createContext();
export default function RJ_16_UseContext_1() {

    return (
        <div>
            <User.Provider value={'hh'}>
                <TestUser.Provider value={'hh test'}>
                    <RJ_16_UseContext_2/>
                </TestUser.Provider>
            </User.Provider>
        </div>
    )
}
