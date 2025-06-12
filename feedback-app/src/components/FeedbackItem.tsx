import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'

type FeedbackDataItem = {
  id: number
  rating: number
  text: string
}

type FeedbackItemProps = {
  item: FeedbackDataItem
  handleDelete: Function
}

function FeedbackItem({ item, handleDelete }: FeedbackItemProps) {
  // const handleClick = (id: number) => {
  //   console.log(id)
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      {/* If not passing args you can do onClick={handleClick} */}
      {/*<button onClick={() => handleClick(item.id)} className="close">*/}

      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
