import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  // Access feedback data & function to update the data
  const [feedbackData, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedbackData.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
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
