import React, { Component } from 'react'
import './QuizCard.css'
import QuizAnswer from './QuizAnswer'

class QuizCard extends Component {
  state = {
    question: "What is this a picture of?",
    answers: [
      {
        "id": "cookies",
        "answer": "Cookies and coffee",
        "correct": true
      },
      {
        "id": "donuts",
        "answer": "Donuts and cider",
        "correct": false 
      }
    ],
    feedback: "I just love cookies and a warm cup of coffee!",
    imageURL: "https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif",
    selectedAnswer: "",
    submitted: false,
  }

  handleChange = (event) => {
    this.setState({ selectedAnswer: event.target.value })
  }

  onSubmit = () => {
    this.setState({ submitted: true })
  } 
  
  addButtonClasses = () => {
    let defaultButtonClasses = "quiz-card__button "
    return this.state.selectedAnswer !== "" ? defaultButtonClasses + "button-background" : defaultButtonClasses }

  addActionsClasses = () => {
    let defaultActionsClasses = "quiz-card__actions "
    return this.state.submitted ? defaultActionsClasses + "quiz-card__actions--proceed" : defaultActionsClasses
  }

  render() {
    const { question, answers, feedback, imageURL, selectedAnswer } = this.state

    return (
      <div className="quiz-card">
          <div className="quiz-card__title">
            <p>{question}</p>
          </div>
          <figure className="figure-image">
            <img className="figure-image__image" alt="" src={imageURL} />
          </figure>
          <div className="quiz-card__answers">
          {answers.map((answer) => (
            <div className="quiz-answer" key={answer.id}>
               <input type="radio" name="answer1" id={answer.id} value={answer.id} onChange={this.handleChange}/>
               <label htmlFor={answer.id} className="quiz-answer__label">
                 <p>{answer.answer}</p>
               </label>
             </div>
          ))}
          </div>
          <div className={this.addActionsClasses()}>
            <div className="quiz-card__submit">
              <button className={this.addButtonClasses()} type="submit" disabled={selectedAnswer === ""} onClick={this.onSubmit}>Submit</button>
            </div>
          </div>
          <div>
            <div className="card-panel grey lighten-1">
              <p>{feedback}</p>
            </div>
          </div>
      </div>  
    )
  }
}

export default QuizCard
