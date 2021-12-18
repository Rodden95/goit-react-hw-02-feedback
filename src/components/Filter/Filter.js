import { Component } from "react/cjs/react.production.min";

export default class Filter extends Component  {
  state = {
    filterText:[]
  }
  filterInputHandler = (e) => {
    this.setState({ filterText: e.target.value })
    this.props.filter(this.state.filterText)
  }
  // sendData = () => {
    
  // }
  render(){
    return(
      <div></div>
    )
  }
}