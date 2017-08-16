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
    imageURL: "https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif"
  }

  render() {
    const { question, answers, feedback, imageURL } = this.state
    return (
      <div className="quiz-card">
          <div className="quiz-card__title">
            <p>{question}</p>
          </div>
          <figure className="figure-image">
            <img className="figure-image__image" alt="" src={imageURL} />
          </figure>
          <div className="quiz-card__answers">
            {answers.map((answer) => <QuizAnswer key={answer.id} answer={answer}/>)}
          </div>
          <div className="card-action">
            <button className="btn" type="submit" name="">Submit</button>
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
