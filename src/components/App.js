import React from 'react';
import ScoreDisplay from '../containers/ScoreDisplay';
import CurrentQuestion from '../containers/CurrentQuestion';

const App = () => (
  <div className="container text-center">
    <ScoreDisplay />
    <CurrentQuestion />
  </div>
);

export default App;
