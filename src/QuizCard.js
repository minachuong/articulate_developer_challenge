import React, { Component } from 'react'
import './QuizCard.css'
import QuizAnswer from './QuizAnswer'

class QuizCard extends Component {
  
  render() {
    return (
      <div className="quiz-card">
        <div className="quiz-card__title">
          <p>What is this a picture of?</p>
        </div>
        <figure>
          <img className="figure-image" alt="" src="https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif" />
        </figure>
        <div className="quiz-card__answers">
          <QuizAnswer />
          <QuizAnswer />
        </div>
        <div className="card-action">
          <button className="btn" type="submit" name="">Submit</button>
        </div>
        <div>
          <div className="card-panel grey lighten-1">
            <p>I just love cookies and a warm cup of coffee!</p>
          </div>
        </div>
      </div>  
    )
  }
}

export default QuizCard
