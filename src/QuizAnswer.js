import React, { Component } from 'react'
import './QuizAnswer.css'
import Icon from './Icon'

class QuizAnswer extends Component {  
  render () {
    const { answer } = this.props

    return (
      <div className="quiz-answer">
        <Icon id="check" color="#747a7e"/>
        <Icon id="cross" color="#747a7e"/>
        <input className="quiz-answer__input" name="answer1" type="radio" id={answer.id} />
        <label htmlFor={answer.id} className="quiz-answer__label">
          <p>{answer.answer}</p>
        </label>
      </div>
    )
  }
}

export default QuizAnswer
