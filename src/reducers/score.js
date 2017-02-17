const score = (state = 0, action) => {
  switch (action.type) {
    case 'CORRECT_ANSWER':
      return state + 1;
    default:
      return state;
  }
};

export default score;
