
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'
import Notification from '../Notification'
import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.development';
export default class Feedback extends Component {


  onClickFeedbackChange = (e) => {
      this.props.onClickFeedbackChange(e.target.name)
  }
  render(){
    const {good, neutral, bad, total, positivePercentage} = this.props
    return (
      <div>
          <Section title='Please leave feedback'/>
          <FeedbackOptions 
            onClickFeedbackChange={this.onClickFeedbackChange} 
            option={this.props.stateValues}
          />

          <Section title='Statistics' />

          { 
            total === 0 
            ?
            <Notification 
            messege='There is no feedback'/>
            :
            <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage}
            />
          }
         
      </div>
    )
  }
}
PropTypes.Feedback = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired, 
  onClickFeedbackChange: PropTypes.func.isRequired,
}