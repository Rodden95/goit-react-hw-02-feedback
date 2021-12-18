import { Component } from "react/cjs/react.production.min"
import './ToggleMenu.css'
export default class ToggleMenu extends Component {
  
  state = {
    visible: false,
  }
  toggle = () => {
    this.setState((prevState) => {
      // console.log(!prevState.visible);
      return {
        visible:!prevState.visible
      }
    }
      
    )
    
  }

  hide= () => {
    this.setState({visible:false})
    
  }
  render() {
    return <div className="menu">
              <div className="btn_list">
        <button onClick={this.toggle}>
          {!this.state.visible? 'скрыть':'показать'}
        </button>
        
      </div>
      {!this.state.visible && 
      <div className="toggled_menu">menu</div>
      }
      </div>
  }
}