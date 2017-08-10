import React, { Component } from 'react'

class QuizAnswer extends Component {  
  render () {
    const { answer } = this.props

    return (
      <div className="quiz-answer">
        <input className="with-gap" name="answer1" type="radio" id={answer.id} />
        <label htmlFor={answer.id}>{answer.answer}</label>
      </div>
    )
  }
}

export default QuizAnswer
