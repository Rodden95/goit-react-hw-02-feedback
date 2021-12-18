import { Component } from "react/cjs/react.production.min";
import './ColorPicker.css'
export default class ColorPicker extends Component {

  state = {
    boxIdx: 1,
  }
  boxIdxToState = index => {
    this.setState({ boxIdx: index })
    // console.log(this.state.boxIdx);
  }
  indexInState = (index) => {
    // this.setState({boxIdx:index})
    console.log(index);
  }
  boxClassAdd = (index) => {
    // console.log(this.state.boxIdx, index, index === this.state.boxIdx);
          let array = ['color_box']
    if (index === this.state.boxIdx) array.push('color_box--border')
    return array.join(' ')
  }
  render() {
    return <div className="box-container">
      <h2>ColorPicker</h2>
      <div className="cont">{
        
        this.props.colors.map(({ label, color }, index) => {
          const classBoxAddFuncResult = this.boxClassAdd(index)
          return <button
            key={label}
            className={classBoxAddFuncResult}
            style={{
              backgroundColor: color,
              
            }}
            onClick={()=>this.boxIdxToState(index)}
          >

          </button>
        })
      }</div>
    </div>
  }
}