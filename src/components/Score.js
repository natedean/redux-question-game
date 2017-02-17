import React, { PropTypes } from 'react';

const Score = ({score}) => {
  return <h1 style={{ position: 'fixed', top: '1em' }}>{score}</h1>
};

export default Score;

Score.propTypes = {
  score: PropTypes.number
};
