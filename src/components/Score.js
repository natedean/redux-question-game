import React, { PropTypes } from 'react';

const Score = ({score}) => {
  return <h1>{score}</h1>
};

export default Score;

Score.propTypes = {
  score: PropTypes.number
};
