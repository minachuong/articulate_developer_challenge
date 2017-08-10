import React, { Component } from 'react'
import './BlockKnowledge.css'
import QuizCard from './QuizCard'

class BlockKnowledge extends Component {

  render() {
    return (
      <div className="row valign-wrapper">
        <div className="col m12 s12">
          <div className="block-knowledge__container">
            <div className="block-knowledge__wrapper">
              <QuizCard />
            </div>
          </div>  
        </div>
      </div>  
    )
  }
}

export default BlockKnowledge
