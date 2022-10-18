import { useState } from 'react'
import Calendar from './components/Calendar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Calendar />
        <p>test</p>
      </div>
    </div>
  )
}

export default App
