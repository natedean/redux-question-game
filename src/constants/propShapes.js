import { PropTypes } from 'react';

const question = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isCorrect: PropTypes.bool
  }).isRequired).isRequired
};

export default {
  question
}
