const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';
const TOGGLE_OFF_SPECIALTY = 'TOGGLE_OFF_SPECIALTY';
const LOAD_DOCTORS = 'LOAD_DOCTORS';
const LOAD_ATEND = 'LOAD_ATEND';
const LOAD_SPECIAL = 'LOAD_SPECIAL';

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

const loadAtend = atend => ({
  type: LOAD_ATEND,
  payload: atend,
});

const loadSpecial = special => ({
  type: LOAD_SPECIAL,
  payload: special,
});

export { specialtyFilter, toggleOffSpecialty, loadDoctors, loadAtend, loadSpecial };
