import  React,{ Component } from 'react'

class ES7React extends Component {

    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    incre = ()=>{
      //  this.state.count = this.state.count+1;
      this.setState(
        (ps)=>({
            count:ps.count+1
        })
          /*{count:this.state.count+1},
            () =>{
                console.log('inside state1:'+this.state.count)
            }  */          
        )
        console.log('counter:'+this.state.count)
    }
    incre5 = ()=>{
        this.incre();
        this.incre();
        this.incre();
        this.incre();
        this.incre();
    }
    render() {
        return (
            <div>
                Count-{this.state.count} <br/>
                <button onClick={()=>this.incre5()}>Incre</button>
            </div>
        )
    }
}

export default ES7React
