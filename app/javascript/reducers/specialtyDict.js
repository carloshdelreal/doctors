const specialtyDictReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_SPECIALDICT':
      return action.payload;
    default:
      return state;
  }
};

export default specialtyDictReducer;