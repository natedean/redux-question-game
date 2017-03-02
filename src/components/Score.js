import React, { PropTypes } from 'react';

const Score = ({score, skill}) =>
  <div>
    <h6>score: {score}</h6>
    {!!skill && <h6>Your skill level: {`${skill < 50 ? 'Bottom' : 'Top'} ${skill}%`}</h6>}
  </div>;

export default Score;

Score.propTypes = {
  score: PropTypes.number
};
