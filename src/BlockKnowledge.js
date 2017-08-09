import React, { Component } from 'react'
import './BlockKnowledge.css'
import QuizCard from './QuizCard'

class BlockKnowledge extends Component {

  render() {
    return (
      <div className="row valign-wrapper">
        <div className="col s6 offset-s3">
          <div className="block-knowledge__wrapper">
            <QuizCard />
          </div>
        </div>
      </div>  
    )
  }
}

export default BlockKnowledge
