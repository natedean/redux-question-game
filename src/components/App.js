import React from 'react';
import ScoreDisplay from '../containers/ScoreDisplay';
import CurrentQuestion from '../containers/CurrentQuestion';
import './App.css';

const App = () => (
  <div className="container text-center" style={{maxWidth: '600px'}}>
    <ScoreDisplay />
    <CurrentQuestion />
  </div>
);

export default App;
