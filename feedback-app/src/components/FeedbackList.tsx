import { motion, AnimatePresence } from 'motion/react'
import FeedbackItem from './FeedbackItem'

type FeedbackDataItem = {
  id: number
  rating: number
  text: string
}

type FeedbackListProps = {
  feedbackData?: FeedbackDataItem[]
  handleDelete: Function
}

function FeedbackList({ feedbackData, handleDelete }: FeedbackListProps) {
  if (!feedbackData || feedbackData.length === 0) {
    return <p>There are no feedback items yet.</p>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedbackData.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList
