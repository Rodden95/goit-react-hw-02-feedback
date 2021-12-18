function FeedbackOptions({onClickFeedbackChange}) {
  return (
    
      
        <div>
          <button name="good" onClick={onClickFeedbackChange}>
          Good
          </button>
          <button name="neutral"  onClick={onClickFeedbackChange}>
            Neutral
          </button>
          <button name="bad"  onClick={onClickFeedbackChange}>
            Bad
          </button>
        </div>
    
  )
}

export default FeedbackOptions