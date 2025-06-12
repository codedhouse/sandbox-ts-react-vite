import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header text="Header component" bgColor="blue" textColor="white" />
      <div className="container">
        <h1>App component</h1>
      </div>
    </>
  )
}

export default App
