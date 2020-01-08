import React from 'react';
import PropTypes from 'prop-types';

const Specialty = ({ specialty, selectSpecialty }) => (
  <div className="col-6 p-0 d-flex justify-content-center">
    <button className="btn btn-primary btn-lg btn-block m-1" type="button" onClick={selectSpecialty}>
      {specialty.area}
    </button>
  </div>
);

Specialty.propTypes = {
  specialty: PropTypes.shape({
    id: PropTypes.number,
    area: PropTypes.string,
  }).isRequired,
  selectSpecialty: PropTypes.instanceOf(Function).isRequired,
};

export default Specialty;
