
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions'
import Section from '../Section'
import Notification from '../Notification'
export default function Feedback ({good,neutral,bad, total,positivePercentage, onClickFeedbackChange}) {
 
    return (
      <div>
        <Section title='Please leave feedback'/>
          <FeedbackOptions onClickFeedbackChange={onClickFeedbackChange} />
        {/* </Section> */}
        <Section title='Statistics' />

        {total === 0 ?
          <Notification messege='There is no feedback'/>
          :
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />}
          
        {/* </Section> */}
      </div>
    )
  }
