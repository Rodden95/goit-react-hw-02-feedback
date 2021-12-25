import PropTypes from 'prop-types'
function FeedbackOptions({ onClickFeedbackChange, option }) {
  return (
          <div>
            {Object.keys(option).map(button =>
            
                  <button name={button} onClick={onClickFeedbackChange} key={button}>{button}</button>)}
          </div>
        )
}
PropTypes.FeedbackOptions = {
  onClickFeedbackChange: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
}
export default FeedbackOptions