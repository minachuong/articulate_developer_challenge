import React, { Component } from 'react'
import './QuizCard.css'

class QuizCard extends Component {
  
  render() {
    return (
      <div className="quiz-card">
        <div className="quiz-card__title black-text left-align">
          <p>What is this a picture of?</p>
          <img className="responsive-img" alt="" src="https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif" />
          <hr />
          <form action="#">
            <p>
              <input className="with-gap" name="group1" type="radio" id="test1" />
              <label htmlFor="test1">Cookies and coffee</label>
            </p>
            <p>
              <input className="with-gap" name="group1" type="radio" id="test2" />
              <label htmlFor="test2">Donuts and cider</label>
            </p>
          </form>
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
