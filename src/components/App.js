import React from 'react';
import CurrentQuestion from '../containers/CurrentQuestion';
import RemainingQuestions from '../containers/RemainingQuestions';

const App = () => (
  <div className="container text-center">
    <h2 style={{ marginTop: '1em', marginBottom: '2em' }}>Todo List App</h2>
    <CurrentQuestion />
    <RemainingQuestions />
  </div>
);

export default App;
