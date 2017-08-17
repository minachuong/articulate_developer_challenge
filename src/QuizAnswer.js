import React, { Component } from 'react'
import './QuizAnswer.css'

class QuizAnswer extends Component {  
  state = {
    selectedAnswer: ""
  }
  
  handleChange = (event) => {
    this.setState({selectedAnswer: event.target.value})
  }
  
  render () {
    const { answer } = this.props
    console.log(this.state)
    return (
      <div className="quiz-answer">
        <input type="radio" name="answer1" id={answer.id} value={answer.id} onChange={this.handleChange}/>
        <label htmlFor={answer.id} className="quiz-answer__label">
          <p>{answer.answer}</p>
        </label>
      </div>
    )
  }
}

export default QuizAnswer
