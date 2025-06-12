import FeedbackItem from './FeedbackItem'

type FeedbackDataItem = {
  id: number
  rating: number
  text: string
}

type FeedbackListProps = {
  feedbackData?: FeedbackDataItem[]
}

function FeedbackList({ feedbackData }: FeedbackListProps) {
  if (!feedbackData || feedbackData.length === 0) {
    return <p>There are no feedback items yet.</p>
  }

  return (
    <div className="feedback-list">
      {feedbackData.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList
