const isLimbo = (state = false, action) => {
  switch (action.type) {
    case 'SET_QUESTION':
      return false;
    case 'ANSWER':
      return action.isCorrect ? false : true;
    default:
      return state;
  }
};

export default isLimbo;
