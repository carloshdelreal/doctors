
const specialtySelectReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_SPECIALTY':
      return action.payload;
    case 'TOGGLE_OFF_SPECIALTY':
      return null;
    default:
      return state;
  }
};

export default specialtySelectReducer;
