
const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_USERDATA':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
