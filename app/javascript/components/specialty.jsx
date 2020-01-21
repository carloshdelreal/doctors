import React from 'react';
import PropTypes from 'prop-types';

const Specialty = ({ specialty, selectSpecialty }) => (
  <div className="col-6 col-xs-6 col-sm-4 p-2 d-flex justify-content-center">
    <button className="specialty__button btn btn-lg btn-block shadow-sm" type="button" onClick={selectSpecialty}>
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
