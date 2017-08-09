import React, { Component } from 'react'
import './QuizCard.css'

class QuizCard extends Component {
  
  render() {
    return (
      <div>
        <div className="card-content black-text">
          <span className="card-title left-align">What is this a picture of?</span>
          <img className="responsive-img" alt="" src="https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif" />
          <hr />
          <form action="#">
            <p>
              <input className="with-gap" name="group1" type="radio" id="test1" />
              <label for="test1">Cookies and coffee</label>
            </p>
            <p>
              <input className="with-gap" name="group1" type="radio" id="test2" />
              <label for="test2">Donuts and cider</label>
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
