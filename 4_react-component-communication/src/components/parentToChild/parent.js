import React from 'react'
import Child from './child';

const Parent = (props) =>{
      return (<div>
                <Child dow={props.dowhat} title={props.title} />
            </div>
      )
  }

export default Parent;
