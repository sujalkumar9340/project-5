import { Component } from 'react'

export default class Updatecompo extends Component {
    componentWillUnmount(){
        console.log("componentwillunmount")
    }
  render() {
    return (
      <div>
        component up date
      </div>
    )
  }
}
