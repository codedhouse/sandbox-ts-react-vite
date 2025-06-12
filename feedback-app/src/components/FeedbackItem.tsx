import Card from './shared/Card'

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
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
