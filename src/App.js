import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row valign-wrapper">
          <div className="col s6 offset-s3">
            <QuizCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
