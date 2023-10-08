import { Component } from 'react'
import Updatecompo from './Updatecompo';

export default class Lifecycle extends Component {
    constructor(){
        super();
        this.state={
            show:true
        }
        console.log("constructor");
    }
    
    componentDidMount(){
        console.log("componentdidmount")
        // this method call only once when dom initialization
    }
   
  render() {
    console.log("render")
    return (
      <div className='container my-5'>
      <h1 className="my-3"> Inspect the code to see how life cycle method work</h1>  
      {
        this.state.show ?
        <Updatecompo/>
        :null
      }
      <button onClick={()=>{this.setState({show:!this.state.show})}}  className='btn btn-primary' style={{backgroundColor:"red"}}>onclick</button>
      </div>
    )
  }
}
