import React, { Component } from 'react'
import './BlockKnowledge.css'
import QuizCard from './QuizCard'

class BlockKnowledge extends Component {

  render() {
    return (
      <div className="block-knowledge">
        <div className="block-knowledge__container">
          <div className="block-knowledge__row">
            <div className="block-knowledge__col">
              <div className="block-knowledge__wrapper">
                <QuizCard />
              </div>
            </div>  
          </div>
        </div>  
      </div>
    )
  }
}

export default BlockKnowledge
