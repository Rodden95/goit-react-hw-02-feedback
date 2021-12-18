
import { Component } from "react/cjs/react.production.min"



class Input extends Component  {
  //  ({ inputValue, onInputChange }) =>
state = { 
  messege:''
  }
   onInputChange = (e) => {

  return this.setState({[e.currentTarget.name]:e.currentTarget.value})
  }
  
  onSubmit = (e) =>    {
    e.preventDefault()
    
    // this.props.onSubmit(this.state)
    this.props.onSubmit(this.state.messege)
    
    this.clear()  
 }
  clear = () => {
   this.setState({messege: ''})
 }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      <label>
          <input
            name="messege"
            type="text"
            value={this.state.messege}
            onChange={this.onInputChange}
          />
      </label>

        <button type="submit" >Sumbit</button>
      </form>)
  }
}

export default Input
