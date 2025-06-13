import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

type FeedbackObj = {
  id: number
  rating: number
  text: string
}

function App() {
  // Access feedback data & function to update the data
  const [feedbackData, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback: FeedbackObj) => {
    const ids: number[] = feedbackData.map((obj) => obj.id)

    let newFeedbackId: number

    do {
      newFeedbackId = Math.floor(Math.random() * (feedbackData.length * 2))!
    } while (ids.includes(newFeedbackId))

    // add id property
    newFeedback.id = newFeedbackId
    // add it to the list
    setFeedback([newFeedback, ...feedbackData])
  }

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedbackData.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbackData={feedbackData} />
        {/* Have to pass handleDelete from here, since this is where the data is */}
        <FeedbackList
          feedbackData={feedbackData}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App
