import React from 'react';
import ScoreDisplay from '../containers/ScoreDisplay';
import CurrentQuestion from '../containers/CurrentQuestion';
import QuestionsContainer from '../containers/QuestionsContainer';
import './App.css';

const App = () => (
  <div className="container text-center" style={{maxWidth: '600px'}}>
    <ScoreDisplay />
    <CurrentQuestion />
    <QuestionsContainer />
  </div>
);

export default App;
