import React from 'react';
import { staffDiagramShape } from '../../constants/propShapes';

const StaffDiagram = ({ diagram }) => {
  return (
    <div className="staffDiagram">I am a staff diagram.</div>
  );
};

export default StaffDiagram;

StaffDiagram.propTypes = {
  diagram: staffDiagramShape
};

