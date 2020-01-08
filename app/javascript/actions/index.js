const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';
const TOGGLE_OFF_SPECIALTY = 'TOGGLE_OFF_SPECIALTY';

const specialtyFilter = specialty => ({
  type: CHANGE_SPECIALTY,
  payload: specialty,
});

const toggleOffSpecialty = () =>({
  type: TOGGLE_OFF_SPECIALTY,
});

export { specialtyFilter, toggleOffSpecialty };
