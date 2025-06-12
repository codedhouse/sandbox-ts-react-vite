import { useState } from 'react'

function FeedbackItem() {
  // Set default rating to 7
  const [rating, setRating] = useState(7)
  const [feedback, setText] = useState('This is an example feedback item.')

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{feedback}</div>
    </div>
  )
}

export default FeedbackItem
