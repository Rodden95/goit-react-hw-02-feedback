import { Component } from "react/cjs/react.development"

export default class Checkbox extends Component {
  state = {
    checked: false,
    yesOrNo: ''
  }
  changeChecked = () => {
    this.setState(prevState => {
     
      if (prevState.checked) {
        return {
          yesOrNo: 'no',
        checked: !prevState.checked}
      } else {
        return {
          yesOrNo: 'yes',
          
      checked: !prevState.checked  }
      }
      
    })
  }
  render() {
    return (
      <label >Hello?
        <input type="checkbox" onChange={this.changeChecked} checked={this.state.checked}/>Yes
        <input type="checkbox" onChange={this.changeChecked} checked={!this.state.checked}/>No
      </label>
    )
  }
}