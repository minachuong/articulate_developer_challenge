import React, { Component } from 'react'

class QuizAnswer extends Component {
  render () {
    return (
      <div className="quiz-answer">
        <input className="with-gap" name="group1" type="radio" id="test2" />
        <label htmlFor="test2">Cookies and coffee</label>
      </div>
    )
  }
}

export default QuizAnswer
