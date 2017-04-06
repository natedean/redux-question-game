import { PropTypes } from 'react';

const question = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired,
  helpers: PropTypes.shape({
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    diagrams: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        notes: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.string),
          PropTypes.arrayOf(PropTypes.shape({
            string: PropTypes.number.isRequired,
            fret: PropTypes.number.isRequired
          }))
        ]).isRequired
      })
    )
  })
};

export default {
  question
}
