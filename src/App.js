import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard'
import BlockKnowledge from './BlockKnowledge'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlockKnowledge />
      </div>
    );
  }
}

export default App;
