import React, { Component } from 'react'
import './QuizAnswer.css'
import Icon from './Icon'

class QuizAnswer extends Component {  
  render () {
    const { answer } = this.props

    return (
      <div className="quiz-answer">
        <input type="radio" className="quiz-answer__input" name="answer1" id={answer.id} />
        <label htmlFor={answer.id} className="quiz-answer__label">
          <span className="quiz-answer__radio">
            <i className="icon icon-tick">
            </i>
          </span>
          <p>{answer.answer}</p>
        </label>
      </div>
    )
  }
}

export default QuizAnswer
