import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

type FeedbackFormProps = {
  handleAdd: Function
}

function FeedbackForm({ handleAdd }: FeedbackFormProps) {
  // Usually, we need a piece of state for each form input
  const [rating, setRating] = useState(10)
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentText = e.currentTarget.value

    if (currentText === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (currentText.trim().length < 10) {
      setMessage('Text must be at least 10 characters.')
      setBtnDisabled(true)
    } else {
      setMessage('')
      setBtnDisabled(false)
    }

    setText(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // prevent default behavior of submitting the form to the server

    // Check length again cause there are ways to hack the form limit before submitting
    if (text.trim().length >= 10) {
      const newFeedback = { text, rating } // This appears to work despite not having an id property
      handleAdd(newFeedback)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
