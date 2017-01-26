const correctAnswerIds = (state = [], action) => {
  switch (action.type) {
    case 'CORRECT_ANSWER':
      return [...state, action.payload];
    case 'RESET_ANSWERS':
      return [];
    default:
      return state;
  }
};

export default correctAnswerIds;
