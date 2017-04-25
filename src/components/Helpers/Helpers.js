import React from 'react';
import './Helpers.css';
import StaffDiagram from '../StaffDiagram/StaffDiagram';
import TextDiagram from '../TextDiagram/TextDiagram';
import { helpersShape } from '../../constants/propShapes';
import { DIAGRAM_TYPES_MAP } from '../../constants';

const Helpers = ({ helpers }) => {
  return (
    <div className="helpers">
      <p className="helpers__textLine"><strong>Your guess was incorrect</strong></p>
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
    case DIAGRAM_TYPES_MAP.staff:
      return <StaffDiagram diagram={diagram}/>;
    case DIAGRAM_TYPES_MAP.staffScale:
      return <StaffDiagram diagram={diagram}/>;
    case DIAGRAM_TYPES_MAP.guitar:
      return <div>Guitar diagram coming soon</div>;
    case DIAGRAM_TYPES_MAP.text:
      return <TextDiagram diagram={diagram}/>;
    default:
      return <div>No diagram for this type</div>
  }
}
