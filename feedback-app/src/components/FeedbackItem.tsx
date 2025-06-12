type FeedbackDataItem = {
  id: number
  rating: number
  text: string
}

type FeedbackItemProps = {
  item: FeedbackDataItem
}

function FeedbackItem({ item }: FeedbackItemProps) {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem
