import { Component } from "react/cjs/react.production.min";
// import shortid from "shortid";
import Feedback from "../components/Feedback";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  }           

onClickFeedbackChange = (name) => 
              this.setState(prevState => 
                        ({[name]: prevState[name] + 1}))
            
  render() {
    
    const { good, neutral, bad } = this.state

    const procentOfPositiveFeedbacks = Math.round(good/(good + neutral + bad) * 100)
    const sum = good + neutral + bad

    return (
      <div>
        <Feedback stateValues={this.state} good={good} neutral={neutral} bad={bad} total={sum} positivePercentage={procentOfPositiveFeedbacks} onClickFeedbackChange={ this.onClickFeedbackChange}/>
      </div>
    )
  
  }
}
export default App;
