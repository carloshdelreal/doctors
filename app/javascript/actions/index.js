const CHANGE_SPECIALTY = 'CHANGE_SPECIALTY';

const specialtyFilter = specialty => ({
  type: CHANGE_SPECIALTY,
  payload: specialty,
});

export { specialtyFilter };
