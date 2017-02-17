import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = (state) => ({
  score: state.score
});

const ScoreDisplay = connect(mapStateToProps)(Score);

export default ScoreDisplay;
