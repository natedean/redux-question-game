import React from 'react';
import './Helpers.css';
import StaffDiagram from '../StaffDiagram/StaffDiagram';
import TextDiagram from '../TextDiagram/TextDiagram';
import { helpersShape } from '../../constants/propShapes';

const Helpers = ({ helpers }) => {
  return (
    <div className="helpers">
      <p className="helpers__textLine"><strong>Your guess was incorrect.</strong></p>
      { <p className="helpers__textLine">{helpers.text}</p> }
      <div className="helpers__diagramsContainer">
        { helpers.diagrams.map((diagram, i) => {
          return (
            <div key={i} className="helpers__diagram">{renderDiagram(diagram)}</div>
          )
        }) }
      </div>
    </div>
  )
};

export default Helpers;

Helpers.propTypes = {
  helpers: helpersShape.isRequired
};

function renderDiagram(diagram) {
  switch (diagram.type) {
    case 'staff':
      return <StaffDiagram diagram={diagram}/>;
    case 'guitar':
      return <div>I am a guitar diagram</div>;
    case 'text':
      return <TextDiagram diagram={diagram}/>;
    default:
      return <div>No diagram for this type</div>
  }
}
