import type { ReactElement } from 'react'

type CardProps = {
  children: ReactElement[]
  reverse?: boolean
}
function Card({ children, reverse = false }: CardProps) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

export default Card
