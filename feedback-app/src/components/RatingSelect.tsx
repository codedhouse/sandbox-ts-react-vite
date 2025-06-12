import { useState } from 'react'

type RatingSelectProps = {
  select: Function
}

function RatingSelect({ select }: RatingSelectProps) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // + converts e.currentTarget.value from string to number
    setSelected(+e.currentTarget.value)
    // select(selected) // This will show the previous value
    select(+e.currentTarget.value)
  }

  // NOTE: Simplified with iteration
  // @todo - Understand what Array.from() is doing
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
