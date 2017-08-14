import React, { Component } from 'react'
import './QuizAnswer.css'
import Isvg from 'react-inlinesvg'

class QuizAnswer extends Component {  
  render () {
    const { answer } = this.props

    return (
      <div className="quiz-answer">
        <Isvg src="/icons/icon-check.svg" className="icon"></Isvg>
        <input className="quiz-answer__input" name="answer1" type="radio" id={answer.id} />
        <label htmlFor={answer.id} className="quiz-answer__label">
          <p>{answer.answer}</p>
        </label>
      </div>
    )
  }
}

export default QuizAnswer
