import React from 'react'

import {User,TestUser} from './RJ_16_UseContext_1';
export default function RJ_16_UseContext_2() {
    return (
		<div>
			<User.Consumer>
				{user => {
					return (
						<TestUser.Consumer>
                            {
                                channel => {
                                    return <div>User context value :{user}, Test context value :{channel}</div>
                                }   
                            }
						</TestUser.Consumer>
					)
				}}
			</User.Consumer>
		</div>
	)
}
