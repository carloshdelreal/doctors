const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';
const TOGGLE_OFF_SPECIALTY = 'TOGGLE_OFF_SPECIALTY';
const LOAD_DOCTORS = 'LOAD_DOCTORS';

const specialtyFilter = specialty => ({
  type: CHANGE_SPECIALTY,
  payload: specialty,
});

const toggleOffSpecialty = () => ({
  type: TOGGLE_OFF_SPECIALTY,
});

const loadDoctors = doctors => ({
  type: LOAD_DOCTORS,
  payload: doctors,
});

export { specialtyFilter, toggleOffSpecialty, loadDoctors };
