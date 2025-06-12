import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  // Access feedback data & function to update the data
  const [feedbackData, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbackData={feedbackData} />
      </div>
    </>
  )
}

export default App
