import { Link } from 'react-router'
import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React project to leave feedback for a service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default About
