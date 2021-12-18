import { Component } from "react/cjs/react.production.min";

export default class Counter extends Component{
  static defaultProps = {
    propes: 0 
  }
  state = {
    value: this.props.propes,
  }

  increment = () => {
    console.log(this.props.props);
    this.setState((prevState) => {
    return{ value: prevState.value + 1}
    })
  }
  decrement = () => {
    this.setState((prevState) => {
    return{ value: prevState.value - 1}
    })
  }
  render() {
    return <div>

      <span>{this.state.value}</span>
      <div>
        <button onClick={this.increment}>Incr</button>
        <button onClick={this.decrement}>Decr</button>
      </div>

      </div>
    }
}