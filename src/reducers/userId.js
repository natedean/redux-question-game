const userId = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return action.user._id;
    default:
      return state;
  }
};

export default userId;
