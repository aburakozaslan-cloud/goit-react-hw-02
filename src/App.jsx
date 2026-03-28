import { useState, useEffect } from 'react'
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Options from "./components/Options/Options.jsx";

import './App.css'

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem('feedback')
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 }
  })

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = (feedbackType) => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }))
  }

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 })
  }

const { good, neutral, bad } = feedback

const totalFeedback = good + neutral + bad
const positiveFeedback = totalFeedback > 0
  ? Math.round((good / totalFeedback) * 100)
  : 0
  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0
        ? <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        : <Notification />
      }
    </div>
  )
}
export default App;
