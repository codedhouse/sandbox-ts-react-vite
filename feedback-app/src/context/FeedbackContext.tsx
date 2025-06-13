import { createContext, useState, type ReactElement } from 'react'

type FeedbackContextProps = {
  children: ReactElement | ReactElement[]
}

const FeedbackContext = createContext({})

export const FeedbackProvider = ({ children }: FeedbackContextProps) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This item is from context', rating: 10 },
  ])
  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
