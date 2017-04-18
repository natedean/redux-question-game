import { PropTypes } from 'react';

export const staffDiagramShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.string).isRequired
});

export const guitarDiagramShape = PropTypes.shape({
  type: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
      string: PropTypes.number.isRequired,
      fret: PropTypes.number.isRequired
    })).isRequired
});

export const textDiagramShape = PropTypes.shape({
  type: PropTypes.oneOf(['text']).isRequired,
  notes: PropTypes.string.isRequired,
  tones: PropTypes.string.isRequired
});

export const helpersShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  diagrams: PropTypes.arrayOf(PropTypes.oneOfType([textDiagramShape, staffDiagramShape, guitarDiagramShape]))
});

export const questionShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  helpers: helpersShape
});
