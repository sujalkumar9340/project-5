import { Component } from "react";

export default class UpdateMethod extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }
  componentDidUpdate(pP, pS){
    console.log(" componentDidupdate method called ",pS)
    if(pS.counter===this.state.counter){
        console.log("Matched")
    }
  }
  render() {
    return (
      <div className="container my-5 ">
        <h1>componentDidUpdate Lifecycle method</h1>
        <button className="btn btn-primary  "style={{backgroundColor:"red"}} onClick={() => this.setState({counter:this.state.counter+1})}>onclick     { this.state.counter}  </button>
      </div>
    );
  }
}
