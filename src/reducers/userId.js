const userId = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return action.user._id;
    default:
      return state;
  }
};

export default userId;
