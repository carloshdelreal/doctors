import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => (
  <div className="col-xs-12 col-sm-6 p-0 d-flex justify-content-center">
    {doctor.fullname}
  </div>
);

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    docname: PropTypes.string,
    location: PropTypes.string,
    fullname: PropTypes.string,
    specialization_id: PropTypes.number,
  }).isRequired,
};

export default Doctor;
