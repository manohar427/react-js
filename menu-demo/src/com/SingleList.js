import React from 'react';

import ListDemo from './ListDemo';

class SingleList extends React.Component {

    render() {        
        const subList = this.props.p.subEle;        
        var subListFinal = subList.map(e =>{
            return (<ListDemo key={e.lab} p={e}></ListDemo>);   
        });
            return(
                <div className="App">         
                  <ul className='sl'> {subListFinal}</ul>
                </div>
            );
        }                                       
    }
  
  export default SingleList;  