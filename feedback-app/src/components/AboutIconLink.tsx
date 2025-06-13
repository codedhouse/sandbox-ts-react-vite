import { FaQuestion } from 'react-icons/fa'
// Use Link instead of a tags for internal links
import { Link } from 'react-router'

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
