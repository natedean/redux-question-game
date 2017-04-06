import React from 'react';
import './Helpers.css';
import propShapes from '../../constants/propShapes';

const Helpers = ({ helpers }) => {
  return (
    <div className="helpers">
      <p className="helpers__textLine"><strong>Your guess was incorrect.</strong></p>
      { helpers.text.map((line, i) => <p key={i} className="helpers__textLine">{line}</p>) }
      <div className="helpers__diagramsContainer">
        <div className="helpers__diagram">whatever</div>
        <div className="helpers__diagram">whatever</div>
      </div>
    </div>
  )
};

export default Helpers;

Helpers.propTypes = {
  helpers: propShapes.question.helpers
};

