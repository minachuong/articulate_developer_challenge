import React, { Component } from 'react'
import './QuizAnswer.css'
import './QuizCard.css'

class QuizCard extends Component {
  constructor() {
    super();
    this.state = this.getInitialState()
  }

  getInitialState = () => {
    const initialState = {
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
      feedbackClasses: "quiz-card__feedback quiz-card__feedback--frame",
      actionClasses: "quiz-card__actions",
      buttonClasses: "quiz-card__button",
      retakeClasses: "block-knowledge__retake",
      imageURL: "https://cdn.articulate.com/rise/courses/FtHG0DN2jjp0KHxN/d229V-nstxA6tZdi.gif",
      selectedAnswer: "", 
      submitted: false,
      correct: ""
    }
    
    return initialState 
  }

  resetState = () => {
    this.setState(this.getInitialState());
  }

  handleChange = (event) => {
    this.setState({ 
      selectedAnswer: event.target.value,
      correct: this.isCorrect(event.target.value)    
    })
  }

  isCorrect = (selectedValue) => {
    let matchedAnswer = this.state.answers.filter((answer) => answer.id === selectedValue)
    return matchedAnswer[0].correct
  }

  onSubmit = () => {
    let activeFeedbackClass = this.state.correct ? "quiz-card__feedback--correct" : "quiz-card__feedback--incorrect" 
    this.setState({ 
      submitted: true,
      actionClasses: "quiz-card__actions quiz-card__actions--proceed",
      feedbackClasses: `quiz-card__feedback quiz-card__feedback--frame ${activeFeedbackClass}`,
      retakeClasses: "block-knowledge__retake block-knowledge__retake--show" 
    })
  } 
  
  addButtonClasses = () => {
    let defaultButtonClasses = "quiz-card__button "
    return this.state.selectedAnswer !== "" ? `${defaultButtonClasses} button-background` : defaultButtonClasses }

  render() {
    const { question, answers, feedback, imageURL, selectedAnswer } = this.state

    return (
      <div className="quiz-card">
        <div className="quiz-card__container">
          <div className="quiz-card__row">
            <div className="quiz-card__main">
              <div className="quiz-card__title">
                <p>{question}</p>
              </div>
              <figure className="figure-image">
                <img className="figure-image__image" alt="" src={imageURL} />
              </figure>
              <div className="quiz-card__answers">
              {answers.map((answer) => (
                <div className="quiz-answer" key={answer.id}>
                  <input 
                    type="radio" 
                    name="answer1" 
                    className="quiz-answer__input" 
                    id={answer.id} 
                    value={answer.id} 
                    onClick={this.handleChange}/>
                  <label htmlFor={answer.id} className="quiz-answer__label">
                    <span>
                      <p>{answer.answer}</p>
                    </span>
                  </label>
                </div>
              ))}
              </div>
              <div className={this.state.actionClasses}>
                <div className="quiz-card__submit">
                  <button 
                    className={this.addButtonClasses()} 
                    type="submit" 
                    disabled={selectedAnswer === ""} 
                    onClick={this.onSubmit}>Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={this.state.feedbackClasses}>
            <div className="quiz-card__row">
              <div className="quiz-card__main">
                <div className="quiz-card__feedback-wrap">
                  <div className="quiz-card__feedback-icon">
                    <i className={this.state.correct ? "icon-check" : "icon-cross"}></i>
                    <div className="quiz-card__feedback-label">{this.state.correct ? "Correct" : "Incorrect"}</div> 
                  </div>
                  <div className="quiz-card__feedback-text">
                    <p>{feedback}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
          <button className={this.state.retakeClasses} onClick={this.resetState}>
            <i className="icon-reload"></i>
            <span>TAKE AGAIN</span>
          </button>
        </div>
      </div>  
    )
  }
}

export default QuizCard
